import express from 'express'

import response from './response.js'

const router = express()




const cryptoValues = {
    XRP : 0.6474,
    ADA : 0.7746,
    DOGE:  0.1739,
    TRX : 0.1395,
    UNI : 15.49,
    FTM : 0.6395,
    MANA:  0.6651,
}


// Middleware untuk mengizinkan CORS
router.use((req, res, next) => {
    // Izinkan akses dari domain GitHub Pages Anda
    res.header("Access-Control-Allow-Origin", "https://alfinaldo.github.io/northsea/"); // Ganti dengan domain GitHub Pages Anda
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true); // Izinkan kredensial
    next();
});




router.get('/convert/:crypto_symbol/:crypto_amount', (req, res) => {
    try {
        
        const { crypto_symbol , crypto_amount } = req.params

        //* Periksa apakah kripto yang diminta ada dalam daftar nilai kripto
        if(!(crypto_symbol in cryptoValues)) {
            return res.status(400).json({ error: 'Invalid cryptocurrency' });
        }

        //* Ambil nilai kripto dalam USD
         const cryptoValueInUsd = cryptoValues[crypto_symbol]

        //* Ambil jumlah kripto yang akan dikonversi dari parameter URL
        const amount = parseFloat(crypto_amount);

        
        //* Konversi nilai kripto ke USD
        const usd = amount * cryptoValueInUsd;

       
        //* Kirim respons dengan hasil konversi
        res.status(200).json({ crypto_symbol, crypto_amount: amount, usd });
        
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
})


export default router