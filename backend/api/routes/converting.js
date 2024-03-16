import express from 'express'

import response from './response.js'

const router = express()



// const usdToIdrRate = 15740432 

// router.get('/convert/:usd_amount', (req, res) => {
//     try {
//         //* Ambil jumlah yang akan dikonversi dari parameter URL
//         const amount = req.params.usd_amount;
       

//          //* Konversi nilai dalam USD ke Rupiah
//          const usdAmount = parseFloat(amount)
//          const idr = usdAmount * usdToIdrRate;
        

//          //* Kirim respons dengan hasil konversi
//         // res.json({ usd: amount, idr });
//         response(200, usdAmount, idr, "success", res)
       
        
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })


const cryptoValues = {
    XRP : 0.6474,
    ADA : 0.7746,
    DOGE:  0.1739,
    TRX : 0.1395,
    UNI : 15.49,
    FTM : 0.6395,
    MANA:  0.6651,
}



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