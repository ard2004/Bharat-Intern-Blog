import {Schema} from "mongoose";
interface article {
    title: string;
    article: string;
}
exports.article = new Schema<article>({
    title: {
        required:true,
        trim:true,
        type: String
    },
    article: {
        required: true,
        type: String
    }
})

