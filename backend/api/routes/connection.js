import express from 'express'
import jwt from 'jsonwebtoken'
import { MongoClient } from 'mongodb'
import 'dotenv/config';

const router = express()


const uri = process.env.URI_MONGODB

// cek koneksi database
const connectToDatabase = async () => {
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    try {
        await client.connect()
        console.log('connected to mongodb')
        return client.db()
    } catch (error) {
        console.error('connect to mongodb failed', error)
        throw error
    }
}



//* endpoint register
router.post("/register", async (req, res) => {
    const { username, password, confirm_password } = req.body;

    try {
        // Pastikan semua kolom terisi semua
        if (!username || !password || !confirm_password) {
            return res.status(400).send({ message: "Mohon lengkapi semua kolom" });
        }

        // Pastikan password dan confirm_password itu sesuai/sama
        if (password !== confirm_password) {
            return res.status(400).send({ message: "Konfirmasi password tidak cocok!" });
        }

         // Inisialisasi koneksi ke database
         const db = await connectToDatabase();

         // Validasi jika ada username yang sama di dalam database
         const existingUser = await db.collection('users').findOne({ username });
         if (existingUser) {
             return res.status(400).send({ message: "Username pengguna sudah terdaftar" });
         }

           // Tambahkan pengguna baru ke dalam database
           await db.collection('users').insertOne({ username, password, confirm_password });

        res.status(200).send({ message: "Register Berhasil" });
    } catch (error) {
        console.error('Registrasi gagal:', error);
        res.status(500).send({ message: "Registrasi gagal" });
    }
});




    //* endpoint Login
    router.post("/login", async (req, res) => {
        const { username, password } = req.body;
    
        try {
            // Pastikan semua kolom terisi semua
            if (!username || !password) {
                return res.status(400).send({ message: "Mohon lengkapi semua kolom" });
            }
    
            // Temukan pengguna berdasarkan username
            const user = await prisma.user.findUnique({
                where: {
                    username: username,
                    password: password
                },
            });
    
            // Periksa apakah pengguna ditemukan
            if (!user) {
                return res.status(401).send({ message: "Username atau kata sandi tidak valid" });
            }
    
            // Jika verifikasi berhasil, buat token JWT
            const accessToken = jwt.sign({ username: user.username }, 'jwt-access-token', {
                expiresIn: '60s', // expires in 60 seconds (1 minute)
            });
    
            // menyimpan access token ke dalam cookie
            const maxAgeForOneMinute = 60000; // 60.000 milidetik
            res.cookie('accessToken', accessToken, { maxAge: maxAgeForOneMinute, httpOnly: true, secure: true, sameSite: 'strict' });
    
            // membuat token refresh
            const refreshToken = jwt.sign({ username: user.username }, 'jwt-refresh-token', {
                expiresIn: '120s', // 2 menit
            });
    
            // me-resfreh refreshToken di dalam cookie 
            const maxAgeForTwoMinute = 120000; // 120.000 milidetik
            res.cookie('refreshToken', refreshToken, { maxAge: maxAgeForTwoMinute, httpOnly: true, secure: true, sameSite: 'strict' });
    
            // Kirim respons berhasil bersama dengan token
            res.status(200).send({ message: "Login berhasil", username: username, auth: true, token: accessToken });
        } catch (error) {
            console.error('Login failed:', error);
            res.status(500).send({ message: "Login gagal" });
        }
    });




    //* Middleware
    const middleware = (req, res, next) => {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            renewToken(req, res, next);
        } else {
            jwt.verify(accessToken, 'jwt-access-token', (err, decoded) => {
                if (err) {
                    return res.status(401).send({ message: 'invalid token', auth: false });
                } else {
                    req.username = decoded.username;
                    next();
                }
            });
        }
    };



    // RenewToken
    const renewToken = (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).send({ message: "no refresh token", auth: false });
        } else {
            jwt.verify(refreshToken, 'jwt-refresh-token', (err, decoded) => {
                if (err) {
                    return res.status(401).send({ message: "invalid refresh token", auth: false });
                } else {
                    const accessToken = jwt.sign({ username: decoded.username }, 'jwt-access-token', {
                        expiresIn: '1m' // 60 detik (1 menit)
                    });

                    const maxAgeForOneMinute = 60000; // 60.000 milidetik
                    res.cookie('accessToken', accessToken, { maxAge: maxAgeForOneMinute });

                    // Hapus refreshToken dari cookie
                    res.clearCookie('refreshToken');

                    return res.status(200).send({ message: "Token renewed", auth: true });
                }
            });
        }
    };


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