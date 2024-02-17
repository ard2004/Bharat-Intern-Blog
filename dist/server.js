"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const { connectDB } = require('./config/db');
const router = require('./routes/route');
app.use(body_parser_1.default.urlencoded({ extended: true }));
const PORT = 5001;
connectDB();
app.set('view engine', 'ejs');
app.use('/blog', router);
app.get('/', (req, res) => {
    res.redirect('/blog');
});
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
