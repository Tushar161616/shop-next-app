'use client'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { redirect, useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';





const Signin = () => {
    let [show,setShow] = useState(false);
    const router = useRouter();
    let [err,setErr] = useState<string>("");
    let [email,setEmail] = useState<string>();
    let [password,setPassword] = useState<string>();
    let [msg,setMsg] = useState("");
    let sesion = useSession();
    console.log(sesion.data?.user);
    

    const  handleSignin = async (e:React.FormEvent) => {
        try {
            e.preventDefault();

                   
           
            const result = await signIn('credentials',{
                email,password,redirect:false
            })

            console.log(result);
          
            setMsg("User Sign in Succesfully!");
        
            // for clear form after submition
           
            setEmail("")
            setPassword("");

           await router.push("/")
            
            
        } catch (error:any) {
            // console.log(error);
            setErr(error.response.data.message);
          
           
        }
    }

    
  return (
    <div className='border-2 w-full min-h-screen  flex justify-evenly items-center flex-col'>

       

            <h1 onClick={()=>router.push("/")} className='text-5xl font-semibold text-[rgb(62,154,235)] 2xl:text-7xl xl:text-6xl md:text-5xl lg:text-5xl'>ShopNext</h1>
            
            {/* signin form */}
            <form  className='px-5 w-[80%] h-[80vh] border-2 border-gray-200 rounded-lg shadow-2xl flex flex-col justify-evenly 2xl:w-[30%] xl:w-[30%] md:w-[60%] lg:w-[50%]'>

                <div className='text-2xl font-semibold text-black mb-1.5 2xl:text-3xl xl:text-3xl md:text-3xl'>Sign in to Your Account</div>


               

                  {/* email input */}
                <div>
                    <label htmlFor='email' className="font-semibold">Email ID :</label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[40px] text-xl placeholder:text-lg " id='email' type='email' placeholder='Enter Your Email Id' name="email"/>
                </div>

                  {/* password input */}
                <div>
                    <label htmlFor='pw' className="font-semibold">Password :</label>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[40px] text-xl placeholder:text-lg " id='pw' type={show ? "text": "password"} placeholder='Enter Your Password' name="password"/>
                
                {/* show password btn */}
                
                <div className='flex flex-row justify-between w-full'>

                    <div className='flex gap-2 ml-1 mt-1'>
                        <input id='showpw' type='checkbox'/>
                        <label onClick={()=>setShow(!show)} htmlFor='showpw'>{!show ? "Show Password" : "Hide Password"}</label>
                        </div>
                    {/* forgot password */}
                    {/* <div onClick={()=>navigate("/forgotpw")} className='cursor-pointer mr-2 mt-1 text-[rgb(62,154,235)]'>Forgot Password</div> */}
                
                
                </div>
                
                </div>


                {/* signin btn */}
                 <button onClick={handleSignin}  type="submit" className="bg-[rgb(88,176,253)] text-white h-[50px] w-full rounded-xl text-xl font-semibold hover:bg-[rgb(62,154,235)] flex items-center justify-center gap-3">Sign In</button>


                {/* google auth btn */}
                <button onClick={async (e:React.FormEvent)=>{
                    e.preventDefault();
                    await signIn('google',{
                        callbackUrl: "/"
                    })
                    
                 
                }} className="border-2 border-gray-300  h-[50px] w-full rounded-xl text-xl font-semibold hover:bg-gray-100 flex items-center justify-center gap-3"><FcGoogle size={30}/> Sign in with Google</button>

                {/* signup link */}
                <div onClick={()=>router.push("/signup")} className=' text-sm  underline text-center cursor-pointer'>Don't have an Account ? <span  className=' font-bold text-[rgb(62,154,235)]'>Sign up</span></div>

                 <div className="text-2xl " >{msg}</div>
                 <div className="text-2xl text-red-500" >{err}</div>
            </form>



             
       

    </div>
  )
}

export default Signin
