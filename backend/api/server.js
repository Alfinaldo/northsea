import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import connection from './routes/connection.js'
import converting from './routes/converting.js'

const PORT = 3000;


const app = express()
app.use(cors({
    origin: ['https://alfinaldo.github.io/northsea/', 'http://localhost:5173'],
    // methods: ["GET", "POST"],
    // allowedHeaders: ['Content-type', 'Authorization'],
    credentials: true,
  }));

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


app.use("/api", connection)
app.use("/api", converting)



app.get('/', (req, res) => {
    res.send('Selamat datang di aplikasi Express.js!');
})


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})




