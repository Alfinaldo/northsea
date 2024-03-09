// import express from 'express'
// import midtransClient from 'midtrans-client'

// const router = express()

// const formattingIdr = (value) => {
//     return new Intl.NumberFormat("id-ID", {
//       style: "currency",
//       currency: "IDR",
//     }).format(value);
//   };

// router.post("/process-transaction", (req, res) => {

//     const orderId = req.body.order_id; // Ubah ini sesuai dengan struktur objek req.body Anda
//     const fakeIdr = req.body.fakeIdr;
//     const idr = req.body.idr
//     const identifier = req.body.identifier;
//     const collection = req.body.collection;
//     const quantity = req.body.quantity

//       console.log('order_id =>', orderId)
//       console.log('identifier =>', identifier)
//       console.log('collection =>', collection)
//       console.log('idr =>', idr);
//     try {
//         const snap = new midtransClient.Snap({
//             isProduction : false,
//             serverKey : "SB-Mid-server-GhZmpWkVW0C8dea2D2hbMfYd",
//             clientKey : "SB-Mid-client-FxS90e8MvsZ3PqTp",
//         })

//         const parameter = {
//             transaction_details : {
//                 "order_id" : "orderId",
//                 "gross_amount" : Math.floor(idr / 100),
//             },
//             item_details : [{
//                 id : parseFloat(req.body.identifier),
//                 price : Math.floor(idr / 100),
//                 quantity : quantity,
//                 name : collection
//             }]
//         }

//         snap.createTransaction(parameter)
//         .then((transaction) => {
//            const dataPayment = {
//                 response: JSON.stringify(transaction)
//             }
//             const token = transaction.token
    
//             res.status(200).json({message: "berhasil", dataPayment, token: token})
//         })


//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })


// export default router