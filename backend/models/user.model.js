import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    username : {type:String, required: true, unique:true},
    email: {type: String, required: true, unique: true},
    password: {type : String, required:true},
    profilePicture: {
        type: String,
        default: "",
    },
    bannerImg: {
        type: String,
        default: "",
    },
    headline: {
        type: String,
        default: "",
    },
    
},{timestamps:true})