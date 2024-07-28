import mongoose from "mongoose"


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        unique: true,
        require: true
    },
    imgUrl: {
        type: String,
        require: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",  //Schema Name
        require:true
    },
    createdate: {
        type: Date,
        default: Date.now
    }
})

 export const Blog= mongoose.model("Blog",blogSchema)
