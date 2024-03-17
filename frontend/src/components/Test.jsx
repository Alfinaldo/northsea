// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Test = () => {
//   const Key_Exchange_Rate_api = "732c8c252 eb7e16db18f01b3";
//   const [cryptoAmount, setCryptoAmount] = useState(0);
//   const [cryptoPrice, setCryptoPrice] = useState(null);
//   const [usdAmount, setUsdAmount] = useState(0);
//   const [usdToIdrRate, setUsdToIdrRate] = useState(null);
//   const [idrAmount, setIdrAmount] = useState(0);

//   const fetchCryptoPrice = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd"
//       );
//       const price = response.data?.ethereum?.usd;
//       setCryptoPrice(price);
//     } catch (error) {
//       console.error("Gagal mengambil data harga kripto: ", error);
//     }
//   };

//   const fetchUsdToIdrRate = async () => {
//     try {
//       const response = await axios.get(
//         `https://v6.exchangerate-api.com/v6/${Key_Exchange_Rate_api}/latest/USD`
//       );
//       const rate = response.data?.conversion_rates?.IDR; // asumsi respons dari API memiliki properti 'rate' untuk nilai tukar USD ke IDR
//       setUsdToIdrRate(rate);
//     } catch (error) {
//       console.error("Gagal mengambil data kurs USD to IDR: ", error);
//     }
//   };

//   const formatToRupiah = (value) => {
//     return new Intl.NumberFormat("id-ID", {
//       style: "currency",
//       currency: "IDR",
//     }).format(value);
//   };

//   const handleCryptoAmountChange = (event) => {
//     setCryptoAmount(event.target.value);
//   };

//   useEffect(() => {
//     fetchCryptoPrice();
//     fetchUsdToIdrRate();
//   }, []);

//   useEffect(() => {
//     if (cryptoPrice !== null) {
//       setUsdAmount(cryptoAmount * cryptoPrice);
//     }
//   }, [cryptoAmount, cryptoPrice]);

//   useEffect(() => {
//     if (usdToIdrRate !== null) {
//       setIdrAmount(usdAmount * usdToIdrRate);
//     }
//   }, [usdAmount, usdToIdrRate]);

//   return (
//     <div>
//       <h1>Konversi Kripto ke IDR</h1>
//       <p>Masukkan jumlah kripto (ETH):</p>
//       <input
//         type="number"
//         value={cryptoAmount}
//         onChange={handleCryptoAmountChange}
//         className=" border border-slate-600"
//       />
//       <p>Jumlah dalam USD: $ {usdAmount.toFixed(2)}</p>
//       <p>Jumlah dalam IDR: {formatToRupiah(idrAmount)}</p>
//     </div>
//   );
// };

// export default Test;
