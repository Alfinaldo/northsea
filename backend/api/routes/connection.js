import express from 'express'
import mysql from 'mysql'
import jwt from 'jsonwebtoken'

const router = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'server'
})


//* nyecek apakah express dan database mysql berhasil di connect kan atau tidak
db.connect((err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('mysql Connected...')
    }
})



//* endpoint register
router.post("/register", (req, res) => {
    const { username, password, confirm_password } = req.body;
    

        // pastikan semua kolom terisi semua
        if (!username || !password || !confirm_password) {
            return res.status(400).send({ message: "Mohon lengkapi semua kolom" });
        }

        // pastikan password dan confirm_password itu sesuai/sama
        if (password !== confirm_password) {
             res.status(400).send({ message: "Konfirmasi password tidak cocok!" });
             return
        }



        //* validasi jika ada username yang sama di dalam database, maka pesan nya harus error
        const select_user_username = 'SELECT * FROM users WHERE username = ?'
        db.query(select_user_username, [username], (err, result) => {
                if(err) {
                    return res.status(500).send({message: 'Terjadi kesalahan saat mencari pengguna'})
                }
                if (result.length > 0) {    
                    // Jika username sudah ada, kirim respon error
                    res.status(409).send({message: "Username pengguna sudah terdaftar"})
                } else {
                //* jika username belum ada di dalam database maka tambahkan username baru ke dalam database
                db.query('INSERT INTO users (username, password, confirm_password) VALUES (?, ?, ?)', [username, password, confirm_password], (err, result) => {
                    if (err) {
                        res.status(500).send({ message: "Terjadi kesalahan saat mendaftar" });
                        return
                    }
                    res.status(200).send({ message: "Register Berhasil" });
                });
            }

        })

    })




    //* endpoint Login
    router.post("/login", (req, res) => {
        const { username, password, } = req.body;
      
          //* pastikan semua kolom terisi semua
          if (!username || !password  ) {
            return res.status(400).send({ message: "Mohon lengkapi semua kolom" });
        }

        const sql = 'SELECT * FROM users WHERE username = ? ';
        db.query(sql, [username], (err, result) => {
            if(err) {
                res.status(500).send({message: 'Kesalahan Internal Server'});
            }

              //* Periksa apakah hasil query tidak kosong
            if(result.length === 0) {
                return res.status(401).send({ message: 'Username atau kata sandi tidak valid' });
            }

            //* Memverifikasi kata sandi
            const user = result[0];
            if (password !== user.password) {
                return res.status(401).send({ message: 'Username atau kata sandi tidak valid' });
            }

                //* Jika verifikasi berhasil, buat token JWT
                const accessToken = jwt.sign({ username : user.username}, 'jwt-access-token', {
                    expiresIn: '60s' // expires in 60 seconds (1 minute)
                }) 

                //* menyimpan access token ke dalam cookie
                const maxAgeForOneMinute = 60000 // 60.000 milidetik
                 res.cookie('accessToken', accessToken, {maxAge: maxAgeForOneMinute, httpOnly: true, secure: true, sameSite: 'strict'})

                //* membuat token refresh
                const refreshToken = jwt.sign({username: user.username}, 'jwt-refresh-token', {
                    expiresIn: '120s' // 2 menit
                })

                //* me-resfreh refreshToken di dalam cookie 
                const maxAgeForTwoMinute = 120000 // 120.000 milidetik
                res.cookie('refreshToken', refreshToken, {maxAge: maxAgeForTwoMinute, httpOnly: true, secure: true, sameSite: 'strict'})

                // Kirim respons berhasil bersama dengan token
                res.status(200).send({ message: "Login berhasil", username: username, auth: true, token: accessToken });
            })
    })





//* Middleware
    const middleware = (req, res, next) => {
        const accessToken = req.cookies.accessToken
      
        if(!accessToken) {
            renewToken(req, res, next);
        } else {
            jwt.verify(accessToken, 'jwt-access-token', (err, decoded) => {
                if(err) {
                    return res.status(401).send({message: 'invalid token', auth: false})
                } else {
                    req.username = decoded.username
                    next()
                }
            })
        }
    }



    const renewToken = (req, res) => {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken) {
            return res.status(401).send({message: "no refresh token", auth: false}) 
        } else {
            jwt.verify(refreshToken, 'jwt-refresh-token', (err, decoded) => {
                if(err) {
                    return res.status(401).send({message: "invalid refresh token", auth: false})
                } else {
                    const accessToken = jwt.sign({ username: decoded.username }, 'jwt-access-token', {
                        expiresIn: '1m' // 60 detik (1 menit)
                    });

                    const maxAgeForOneMinute = 60000 // 60.000 milidetik
                    res.cookie('accessToken', accessToken, {maxAge: maxAgeForOneMinute}) 
        
                     // Hapus refreshToken dari cookie
                     res.clearCookie('refreshToken');
        
                    return res.status(200).send({ message: "Token renewed", auth: true });
                }
            })
        }
    }


    router.get('/checked-auth', middleware, (req, res) => {
        return res.status(200).send({ message: "Authorized", auth: true });
     })



     // Tambahkan endpoint logout
    router.get('/logout', (req, res) => {
    // Hapus cookie accessToken
    res.clearCookie('accessToken');
    // Hapus cookie refreshToken
    res.clearCookie('refreshToken');
    // Kirim respons berhasil logout
    res.status(200).send({ message: 'Logout successful' });
});
       
  
    



    


export default router