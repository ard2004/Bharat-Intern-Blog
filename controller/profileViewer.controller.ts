import express, {Request,Response} from "express";
import { Error } from "mongoose";
const profileImageURL = "hello"
const username = "Aditya"
const email = "aditya@gmail.com"
const profileViewer = async(req:Request,res:Response) => {
    res.render("profile.ejs",{
        profileImageURL,
        username,
        email
    })
}
module.exports = profileViewer;
