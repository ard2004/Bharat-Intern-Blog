import express, {Request,Response} from "express";
import { Error } from "mongoose";
const Article = require("../models/article.model")
const viewArticle = async(req:Request,res:Response) => {
    try{
        const article = await Article.findOne({_id:req.params.blog_id})
        res.render("blog.ejs",{article})
    } catch(err){
        console.log(err)
    }
    
}
module.exports = viewArticle;
