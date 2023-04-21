import express from 'express';
import configViewEngine from './configs/ViewEngine';
import initWebRoute from './route/web.js';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require(`dotenv`).config();

const app = express()
const port = process.env.PORT || 3000; // khi PORT ko chạy thì lấy 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup view engine
configViewEngine(app);
//init web route
initWebRoute(app);
// init API route
initAPIRoute(app);



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})