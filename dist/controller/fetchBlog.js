"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerController = express_1.default.Router();
const Article = require("../models/article.model");
routerController.get('/', (req, res) => {
    console.log("controller accessed");
    try {
        const articles = Article.find({});
        console.log(articles);
        res.sendStatus(200).sendFile("SUCCESS");
    }
    catch (e) {
        res.sendStatus(500);
    }
});
module.exports = routerController;
