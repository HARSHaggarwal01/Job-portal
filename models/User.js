import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({

    firstname:{
        type:String,
        required:[true,'Name is require']
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        required:[true,'Email is require'],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        required:[true,'Password is require'],
    },
    country:{
        type:String,
        default:"India",
    },
    },
    {timestamps:true}

);

export default mongoose.model("User", userSchema);