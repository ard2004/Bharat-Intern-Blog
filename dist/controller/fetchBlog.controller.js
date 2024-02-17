"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogFetchRouter = express_1.default.Router();
const Article = require("../models/article.model");
let status = 200;
console.log("Running fetchBlog Controller");
const fetchBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = Article.find({});
        res.send({
            status: 200,
            message: `success: ${articles}`
        });
    }
    catch (e) {
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
});
module.exports = fetchBlog;
