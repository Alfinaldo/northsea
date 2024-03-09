import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser'
// import paymentRoutes from './routes/paymentRoutes.j'
import connection from './routes/connection.js'
import converting from './routes/converting.js'

const PORT = 3000;

const app = express()
app.use(cors({
    origin: ["http//localhost:3000"],
    credentials: true
}))

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// app.use("/api/payment", paymentRoutes)
app.use("/api", connection)
app.use("/api", converting)


app.get('/', (req, res) => {
    res.send('Selamat datang di aplikasi Express.js!');
})


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})




