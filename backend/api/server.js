import app from "./app.js";

const PORT = 3000;



app.get('/', (req, res) => {
    res.send('Selamat datang di aplikasi Express.jsssss!');
})



app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})









