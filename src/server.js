import express from 'express';
import configViewEngine from './configs/ViewEngine';
import initWebRoute from './route/web.js';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require(`dotenv`).config();
var morgan = require('morgan');

const app = express()
const port = process.env.PORT || 3000; // khi PORT ko chạy thì lấy 3000

app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup view engine
configViewEngine(app);
//init web route
initWebRoute(app);
//init API route
initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
    return res.render('404.ejs')
})



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})