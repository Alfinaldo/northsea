import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser'
// import paymentRoutes from './routes/paymentRoutes.js'
import connection from './routes/connection.js'
import converting from './routes/converting.js'


const app = express()
app.use(cors({
    origin: ["https://northsea-weld-six.vercel.app"],
    credentials: true
}))

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// app.use("/api/payment", paymentRoutes)
app.use("/api", connection)
app.use("/api", converting)



export default app;
