import express, {Request,Response} from "express";
import { Error } from "mongoose";
const Article = require('../models/article.model');
const createArticle = async(req:Request,res:Response) => {
    console.log(req.params.title);
    const article = new Article({
        title: req.params.title,
        article: req.body.article, 
        createdAt: req.body.createdAt
    })
    article.save().then(()=>{
        console.log("saved")
        res.render("success",{
            blog_title: req.body.title
        });
    })
    .catch((err: Error)=>{
        console.log(`error saving the blog ${err}`)
    })
    
    
}
module.exports = createArticle;
