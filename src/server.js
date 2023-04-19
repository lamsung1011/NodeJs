import express from 'express';
import configViewEngine from './configs/ViewEngine';
import initWebRoute from './route/web.js';
// import connection from './configs/connectDB';

require(`dotenv`).config();

const app = express()
const port = process.env.PORT || 3000; // khi PORT ko chạy thì lấy 3000
//setup view engine
configViewEngine(app);
//init web route
initWebRoute(app);





app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})