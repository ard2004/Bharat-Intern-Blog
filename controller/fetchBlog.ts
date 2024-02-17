import express, { Request, Response } from "express";
const routerController = express.Router();
const Article = require("../models/article.model");
routerController.get('/',(req:Request,res:Response)=>{
    console.log("controller accessed")
    try{
        const articles = Article.find({}) 
        console.log(articles);
        res.sendStatus(200).sendFile("SUCCESS");
    } catch(e){
        res.sendStatus(500);
    }
});
module.exports = routerController; 
