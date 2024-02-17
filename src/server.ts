require("dotenv").config()
import bodyParser from "body-parser";
import express, {Express, Request, Response} from "express";
const app:Express = express();
const {connectDB}= require('./config/db');
const router = require('./routes/route')
app.use(bodyParser.urlencoded({extended: true}));
const PORT: number = 5001;
connectDB()
app.set('view engine','ejs');
app.use('/blog',router);
app.get('/',(req:Request,res:Response)=>{ 
    res.redirect('/blog');
})
app.listen(PORT,() => {
    console.log(`listening at http://localhost:${PORT}`)
})


