require("dotenv").config()
import express, {Express, Request, Response} from "express";
const app:Express = express();
const router = require('./routes/route')
const {connectDB}= require('./config/db')
const PORT: number = 5001;
connectDB()
app.use('/',router);

app.listen(PORT,() => {
    console.log(`listening at http://localhost:${PORT}`)

})


