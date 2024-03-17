// import ExchangeToIdr from "./ExchangeToIdr";

// const ExchangeToUsd = ({ result, idr }) => {
//   return (
//     <>
//       <div>$ {result.toFixed(4)}</div>
//       <ExchangeToIdr result={result} idr={idr} />
//     </>
//   );
// };

// export default ExchangeToUsd;

//! error handling with axios //
// try {
//   setIsLoading(true); // Set isLoading ke true sebelum melakukan permintaan fetch
//   const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd`);
//   const data = response.data;
//   setCryptoPrice(data[name].usd);
// } catch (error) {
//   console.error("Gagal mengambil data harga kripto: ", error);
//   setIsLoading(false); // Set isLoading kembali ke false ketika terjadi kesalahan
//   // Custom handling for specific error types or specific error messages:
//   if (error.response) {
//     // The request was made and the server responded with a status code that falls out of the range of 2xx
//     console.error("Server responded with status code: ", error.response.status);
//   } else if (error.message === 'Network Error') {
//     // A network error occurred
//     console.error("Terjadi kesalahan jaringan: ", error.message);
//   } else {
//     // Handle other errors
//     console.error("Kesalahan lainnya: ", error.message);
//   }
// }
