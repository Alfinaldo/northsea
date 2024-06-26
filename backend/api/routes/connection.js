import express from 'express'
import jwt from 'jsonwebtoken'
// import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'
import { config } from 'dotenv';
config();


const router = express()


const uri = 'mongodb+srv://northsea:12345@cluster0.345yfvb.mongodb.net/server';

// Buat koneksi ke MongoDB menggunakan Mongoose
mongoose.connect(uri);


const db = mongoose.connection


// Tangani event kesalahan koneksi
db.on('error', console.error.bind(console, 'Koneksi MongoDB gagal:'));

// Tangani event koneksi berhasil
db.once('open', () => {
    console.log('Terhubung ke MongoDB');
});

// Mendefinisikan skema pengguna
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirm_password: { type: String, required: true }
});

// Membuat model pengguna dari skema
const User = mongoose.model('User', userSchema);


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


        // Validasi jika ada username yang sama di dalam database
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send({ message: "Username pengguna sudah terdaftar" });
        }

        // Tambahkan pengguna baru ke dalam database
        const newUser = new User({ username, password, confirm_password });
        await newUser.save();

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
        const user = await User.findOne({ username });

        // Periksa apakah pengguna ditemukan
        if (!user) {
            return res.status(401).send({ message: "Username atau kata sandi tidak valid" });
        }

        // Periksa apakah password cocok
        if (user.password !== password) {
            return res.status(401).send({ message: "Username atau kata sandi tidak valid" });
        }

        // Jika verifikasi berhasil, buat token JWT
        const accessToken = jwt.sign({ username: user.username }, 'jwt-access-token', {
            expiresIn: '60s', // expires in 60 seconds (1 minute)
        });

        // menyimpan access token ke dalam cookie
        const maxAgeForOneMinute = 60000; // 60.000 milidetik
        res.cookie('accessToken', accessToken, { maxAge: maxAgeForOneMinute, httpOnly: true, secure: true, sameSite: 'none' });

        // membuat token refresh
        const refreshToken = jwt.sign({ username: user.username }, 'jwt-refresh-token', {
            expiresIn: '120s', // 2 menit
        });

        // me-resfreh refreshToken di dalam cookie 
        const maxAgeForTwoMinute = 120000; // 120.000 milidetik
        res.cookie('refreshToken', refreshToken, { maxAge: maxAgeForTwoMinute, httpOnly: true, secure: true, sameSite: 'none' });

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
    try {
        // Hapus cookie accessToken
        res.clearCookie('accessToken');
        // Hapus cookie refreshToken
        res.clearCookie('refreshToken');
        // Kirim respons berhasil logout
        res.status(200).send({ message: 'Logout successful' });
    } catch (error) {
        console.error('Logout failed:', error);
        res.status(500).send({ message: 'Logout failed' });
    }
});



export default router