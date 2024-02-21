import express, {Request,Response} from "express";
import { Error } from "mongoose";
const Article = require('../models/article.model');
const createArticle = async(req:Request,res:Response) => {
    const article = new Article({
        title: req.body.title,
        article: req.body.article, 
        createdAt: req.body.createdAt
    })
    article.save().then(()=>{
        res.render("success",{
            blog_title: req.body.title
        });
        console.log("blog saved successfully")
    })
    .catch((err: Error)=>{
        console.log(`error saving the blog ${err}`)
    })
    
    
}
module.exports = createArticle;
