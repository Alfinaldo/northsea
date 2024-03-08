import app from "./app.js";

const PORT = 3000;



app.get('/api', (req, res) => {
    res.send('Selamat datang di aplikasi Express.js!');
})



app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})









