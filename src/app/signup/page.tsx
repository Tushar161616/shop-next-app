'use client'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { signIn } from 'next-auth/react';




const Signup = () => {
  const router = useRouter();
    let [show,setShow] = useState(false);
    let [uname,setUname] = useState();
    let [email,setEmail] = useState();
    let [number,setNumber] = useState();
    let [password,setPassword] = useState();
    let [msg,setMsg] = useState("");
    let [err,setErr] = useState("");
   

    const  handleSignup = async (e : React.FormEvent) => {
        try {
            e.preventDefault();
           
            const result = await axios.post(`/api/auth/callback/google`,{
               name: uname,
               email,
               number,
               password
            },{withCredentials:true})

            // console.log(result);
            setMsg("User Account Created Succesfully!");
        
            // for clear form after submition
            setUname("");
            setEmail("");
            setNumber("")
            setPassword("");

         await router.push("/signin")
    
            
            
        } catch (error) {
            // console.log(error);
            setErr(error?.response?.data?.message || "signup error");
            
        }
    }

  
    
  return (
    <div className='border-2 w-full min-h-screen  flex justify-evenly items-center flex-col'>

       

            <h1 onClick={()=>router.push("/")} className='text-5xl font-semibold text-[rgb(62,154,235)] 2xl:text-7xl xl:text-6xl md:text-5xl lg:text-5xl'>ShopNext</h1>
            
            {/* signup form */}
            <form  className='px-5 w-[80%] h-[80vh] border-2 border-gray-200 rounded-lg shadow-2xl flex flex-col justify-evenly 2xl:w-[30%] xl:w-[30%] md:w-[60%] lg:w-[50%]'>

                <div className='text-2xl font-semibold text-black mb-1.5 2xl:text-3xl xl:text-3xl md:text-3xl'>Create Your Account</div>


                {/* username input */}
                <div>
                    <label htmlFor='username' className="font-semibold">Full Name :</label>
                    <input onChange={(e)=>setUname(e.target.value)} value={uname} className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[40px] text-xl placeholder:text-lg " id='username' type='text' placeholder='Enter Your Full Name' name="username"/>
                </div>


               

                  {/* email input */}
                <div>
                    <label htmlFor='email' className="font-semibold">Email ID :</label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[40px] text-xl placeholder:text-lg " id='email' type='email' placeholder='Enter Your Email Id' name="email"/>
                </div>

                  {/* number input */}
                <div>
                    <label htmlFor='number' className="font-semibold">Contact Number :</label>
                    <input onChange={(e)=>setNumber(e.target.value)} value={number} className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[40px] text-xl placeholder:text-lg " id='number' type='number' required placeholder='Enter Your Contact Number' name="number"/>
                </div>

                  {/* password input */}
                <div>
                    <label htmlFor='pw' className="font-semibold">Password :</label>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[40px] text-xl placeholder:text-lg " id='pw' type={show ? "text": "password"} required placeholder='Enter Your Password' name="password"/>
                
                {/* show password btn */}
                <div className='flex gap-2 ml-1 mt-1'>
                    <input id='showpw' type='checkbox'/>
                    <label onClick={()=>setShow(!show)} htmlFor='showpw'>{!show ? "Show Password" : "Hide Password"}</label>
                </div>
                
                </div>

                 

                

                {/* term & condition checkbox */}
                <div  className='flex gap-2 ml-1'>
                    <input id='policy' type='checkbox' defaultChecked/>
                    <label htmlFor='policy' className='text-blue-900'>I agree to the Terms & Conditions</label>
                </div>

                {/* signup btn */}
                <button onClick={handleSignup}  type="submit" className="bg-[rgb(88,176,253)] text-white h-[50px] w-full rounded-xl text-xl font-semibold hover:bg-[rgb(62,154,235)] flex items-center justify-center gap-3">SignUp</button>

                {/* google auth btn */}
                <button  onClick={async (e: React.FormEvent)=>{
                     e.preventDefault();
                   await signIn('google')
                   
                  
                    }} className="border-2 border-gray-300  h-[50px] w-full rounded-xl text-xl font-semibold hover:bg-gray-100 flex items-center justify-center gap-3"><FcGoogle size={30}/> SignUp with Google</button>

                {/* login link */}
                <div onClick={()=>router.push("/signin")} className=' text-sm  underline text-center cursor-pointer'>Already Have an Account ? <span  className=' font-bold text-[rgb(62,154,235)]'>Sign in</span></div>

                 <div className="text-2xl " >{msg}</div>
                 <div className="text-2xl text-red-500" >{err}</div>
            </form>



             
       

    </div>
  )
}

export default Signup
