import { connect } from "mongoose";


let mongodburl = process.env.MONGODB_URL;

if (!mongodburl) {
  throw new Error("mongodburl is not define");
}

let cached = global.mongoose


if(!cached){
    cached = global.mongoose={con:null,promise: null}
}

const connectdb = async () => {

    if(cached.con){
        console.log("db connected");
        return cached.con
    }

    // if not any connection then connect
    if(!cached.promise){
        cached.promise =  connect(mongodburl)
        
        
    }

    // if any connection running it wait for it
    try {
        cached.con  = await cached.promise
        console.log("db connected");

    } catch (error) {
        throw error
    }

    return cached.con
}

export default connectdb;