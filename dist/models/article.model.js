"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.article = new mongoose_1.Schema({
    title: {
        required: true,
        trim: true,
        type: String
    },
    article: {
        required: true,
        type: String
    }
});
