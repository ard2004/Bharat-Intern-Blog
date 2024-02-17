import express, {Request,Response} from "express";
const Article = require('../models/article.model');
const createArticle = async(req:Request,res:Response) => {
    res.send({
        status: 200,
        message: `${req.params.createarticle}`
    });
}
module.exports = createArticle;
