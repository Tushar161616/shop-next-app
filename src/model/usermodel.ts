import { timeStamp } from "console";
import mongoose from "mongoose";

interface Iuser{
    name : string,
    email : string,
    number : number,
    password : string
}

const userSchema = new mongoose.Schema<Iuser>({
    name:{
        type : String,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    number: {
        type: Number,
    },
    password:{
        type:String,
        required: false,
    },

},{timestamps:true})

const  userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;