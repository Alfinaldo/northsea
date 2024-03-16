import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import connection from './routes/connection.js'
import converting from './routes/converting.js'

const PORT = 3007;


const app = express()


app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))




app.use(cors({
    origin: 'http://localhost:3007',
    credentials: true,
  }));


app.use("/api", connection)
app.use("/api", converting)




app.get('/', (req, res) => {
    res.send('Selamat datang di aplikasi Express.js!');
})


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})




