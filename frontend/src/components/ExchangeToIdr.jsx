// import axios from "axios";
// import { useEffect, useState } from "react";

// const ExchangeToIdr = ({ result, idr }) => {
//   const Key_Exchange_Rate_api = "732c8c252eb7e16db18f01b3";
//   const [idrRate, setIdrRate] = useState(null);

//   const fetchUsdToIdr = async () => {
//     try {
//       const response = await axios.get(
//         `https://v6.exchangerate-api.com/v6/${Key_Exchange_Rate_api}/latest/USD`
//       );
//       const rate = response.data?.conversion_rates?.IDR;
//       setIdrRate(rate);
//     } catch (error) {
//       console.error("Gagal mengambil data harga kripto: ", error);
//     }
//   };

//   const idr = result * idrRate;

//   const formattingIdr = (value) => {
//     return new Intl.NumberFormat("id-ID", {
//       style: "currency",
//       currency: "IDR",
//     }).format(value);
//   };

//   useEffect(() => {
//     fetchUsdToIdr();
//   }, []);
//   return <div>{formattingIdr(idr)}</div>;
// };

// export default ExchangeToIdr;
