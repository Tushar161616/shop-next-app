import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import connectdb from "./connectdb";
import userModel from "@/model/usermodel";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";


export const authoptions : NextAuthOptions = {

    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                email:{label:"Email" ,type: "text"},
                password:{label:"Password",type:"password"}
            },

           async  authorize(credentials,req){
                let email = credentials?.email;
                let password = credentials?.password;

                if(!email || !password){
                    throw new Error("email or password not found")
                }

                await connectdb()

                let userEx = await userModel.findOne({email});

                if(!userEx){
                    throw new Error("User Dose not Exits")
                }

                let isMatch = await bcrypt.compare(password,userEx.password)
                if(!isMatch){
                    throw new Error("incorrect Password")
                }

                return {
                    id: userEx._id,
                    name : userEx.name,
                    email: userEx.email,
                }

            }


        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })

    ],

    callbacks:{

        async signIn({account,user}){
            if(account?.provider === 'Google'){
                await connectdb()
                let existuser = await userModel.findOne({email: user.email})
                if(!existuser){
                    existuser = await userModel.create({
                        name: user.name,
                        email: user.email,
                        
                    })
                    
                }
                user.id = existuser._id.toString();
               
                
            }
            return true
        },

       async jwt({token,user}){
        if(user){
            token.id  = user.id;
            token.name = user.name;
            token.email = user.email;
        }

        return token
       },

       

       session({session,token}){
        if(session.user){
            session.user.id = token.id as string;
            session.user.name = token.name;
            session.user.email = token.email;
        }

        return session
       }
    },

    session:{
        strategy: 'jwt',
        maxAge : 30*24*60*60*1000,
    },
    pages:{
        signIn: '/signin',
        error : '/signin',
    },
    secret: "secret"
}