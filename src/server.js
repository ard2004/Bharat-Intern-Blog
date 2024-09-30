require("dotenv").config()
import path from "path"
import {connectDB} from "./config/db"
import express from "express";
import router from "./routes/route.js"
const app= express();
app.use(express.urlencoded({extended: true, limit: "20kb"}));
const PORT: number | string  = process.env.PORT ?? 8001;
connectDB()
app.set('view engine','ejs');
app.set("views",path.resolve("./views"))
app.use('/blog',router);
app.get('/',(req,res)=>{ 
    res.redirect('/blog');
})
app.listen(PORT,() => {
    console.log(`listening at  http://localhost:${PORT}`)
})


