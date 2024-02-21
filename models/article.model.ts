import mongoose, {Schema} from "mongoose";
interface article_ {
    title: string;
    article: string;
    createdAt: Date;
}
const articleSchema = new Schema<article_>({
    title: {
        required:true,
        trim:true,
        type: String
    },
    article: {
        required: true,
        type: String
    },
    createdAt: {
        required: true,
        type: Date
    }
})
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
