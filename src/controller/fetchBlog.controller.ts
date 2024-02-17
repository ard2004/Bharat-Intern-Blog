import express, { Request, Response } from "express";
const blogFetchRouter = express.Router();
const Article = require("../models/article.model");
let status = 200;

console.log("Running fetchBlog Controller")
const fetchBlog = async (req:Request,res:Response) => {
    try{
        const articles = Article.find({}) 
        res.send({
            status: 200,
            message: `success: ${articles}`
        });
    } catch(e) {
        res.send({
            status: 500,
            message: "<h1>Failed</h1>"
        });
    }
    /*
     * When i write
     * if (status === 200){
     *     res.sendStatus(200).send("<h1>Success</h1>")
     * } else {
     *     res.sendStatus(500).send("<h1>Failed</h1>")
     * }
     * it gives error headers can't be set after they are sent to client. That is to say that I can't set multiple responses(This happens whenever I refresh)
     * But when I wrote the above it works
     * I want to know the difference between working of res.sendStatus(<status code>).send("<response message>") and 
     res.send({})
     * */
}
module.exports = fetchBlog; 

