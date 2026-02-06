import connectdb from "@/lib/connectdb";
import userModel from "@/model/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req:NextRequest){
    
    try {
         let {name,email,number,password} = await req.json();
         await connectdb();

         let userEx = await userModel.findOne({email})

          if(userEx){
           return NextResponse.json({message: "User Already Exits"},{status: 400});
        }
        if(password.length <6 ){
           return NextResponse.json({message: "Password Must be at least 6 Charcter"},{status:400})
        }
        if(number.length < 10){
           return NextResponse.json({message: "Number Must be at least 10 Digit"},{status:400})
        }

        let hashP = await bcrypt.hash(password,10);

        userEx = await userModel.create({
            name,
            email,
            number,
            password: hashP,
        })


        return NextResponse.json(userEx,{status:201});
        
    } catch (error) {
        return NextResponse.json({message: "Signup Error"},{status:500})
    }

   



}