import { darkMode } from "@/context/ContextProvider";
import axios from "axios";

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const CheckOut = ({ updateDatas }) => {
  const {
    newObject: { order_id, idr, fakeIdr },
    identifier,
    quantity,
    collection,
  } = updateDatas;

  // console.log("updateDatas", updateDatas);

  // const [tokenn, setTokenn] = useState("");
  const { auth } = useContext(darkMode);

  // const handlePayment = async () => {
  //   const roundedIdr = Math.floor(idr / 100);
  //   const roundedFakeIdr = Math.round(fakeIdr);
  //   const parsedIdentifier = parseFloat(identifier);

  //   const data = {
  //     order_id: order_id,
  //     idr: roundedIdr,
  //     fakeIdr: roundedFakeIdr,
  //     identifier: parsedIdentifier,
  //     quantity,
  //     collection,
  //   };

  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/payment/process-transaction",
  //       data, // Kirim objek data langsung
  //       config // Gunakan objek konfigurasi secara langsung
  //     );
  //     setTokenn(response.data.token);
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (tokenn) {
  //     window.snap.pay(tokenn, {
  //       onSuccess: (result) => {
  //         console.log("pembayaran berhasil", result);
  //         setTokenn("");
  //       },
  //       onPending: (result) => {
  //         console.log("pembayaran tertunda", result);
  //         setTokenn("");
  //       },
  //       onError: (error) => {
  //         console.log(error);
  //         setTokenn("");
  //       },
  //       onClose: () => {
  //         console.log("Anda belum menyelesaikan pembayaran");
  //         setTokenn("");
  //       },
  //     });
  //   }
  // }, [tokenn]);

  // useEffect(() => {
  //   const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
  //   let scriptTag = document.createElement("script");
  //   scriptTag.src = midtransUrl;

  //   const midtransClientKey = "SB-Mid-client-FxS90e8MvsZ3PqTp";
  //   scriptTag.setAttribute("data-client-key", midtransClientKey);

  //   document.body.appendChild(scriptTag);

  //   return () => {
  //     document.body.removeChild(scriptTag);
  //   };
  // }, []);

  return (
    <div className=" checkout px 4">
      {!auth ? (
        <>
          <Link to="/northsea/login">
            <button className="py-2 ml-3 bg-blue-500 w-1/2 text-[#f9f9f9] font-medium rounded-lg">
              Buy now
            </button>
          </Link>
        </>
      ) : (
        <button
          // onClick={handlePayment}
          className=" py-2 ml-3 bg-blue-500 w-1/2 text-[#f9f9f9] font-medium rounded-lg"
        >
          Buy now
        </button>
      )}
    </div>
  );
};

export default CheckOut;
