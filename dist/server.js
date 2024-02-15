"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = require('./routes/route');
const { connectDB } = require('./config/db');
const PORT = 5001;
connectDB();
app.use('/', router);
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
