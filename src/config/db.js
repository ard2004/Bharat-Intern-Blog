import mongoose from "mongoose"
// const mongoose:Mongoose = require("mongoose");
exports.connectDB = () => {
    mongoose.connect(`${process.env.MONGO_DB}`)
    .then(()=>{
        console.log(" success: connected to DB!");
    })
    .catch((error) => {
        console.log(error);
        process.exit(1)
    })
}



