import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createdate: {
        type: Date,
        default: Date.now
    }
})

 export const User= mongoose.model("User",userSchema)
