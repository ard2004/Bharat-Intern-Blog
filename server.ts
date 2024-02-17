require("dotenv").config()
import bodyParser from "body-parser";
import express, {Express, Request, Response} from "express";
const app:Express = express();
const router = require('./routes/route');
const {connectDB}= require('./config/db');
const routerController = require("./controller/fetchBlog");
app.use(bodyParser.urlencoded({extended: true}));
const PORT: number = 5001;
connectDB()
app.set('view engine','ejs');
app.use('/blog',router);
app.use('/',routerController);
app.listen(PORT,() => {
    console.log(`listening at http://localhost:${PORT}`)
})


