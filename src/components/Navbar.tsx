'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { PiUserCircleThin } from "react-icons/pi";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';


const Navbar = () => {
    // let data = useSession()
    // console.log(data.status);
    
    
    const pathname = usePathname();
    let [open,setOpen] = useState(false);
    const router = useRouter();

  return (
    <div className='w-full h-20 border-b-2 border-gray-300 flex justify-evenly items-center sticky top-0 right-0 bg-white z-100'>


        {/* logo section */}
        <div className=' w-[60%]  h-full flex items-center justify-between pl-4 xl:w-[40%] 2xl:w-[40%] 2xl:justify-start xl:justify-start'>
            
            

            
           

            {/* logo text */}
            <div onClick={()=>router.push("/")} className='flex items-center gap-5 text-4xl font-bold text-[rgb(62,154,235)] xl:ml-20 2xl:ml-20'><Image src={'/logo.png'} width={60} height={60} alt='logo' /> ShopNext</div>

        </div>



        {/* main-menu section */}
        <div className='hidden  h-full text-lg  text-[rgb(130,218,252)] flex items-center justify-end gap-15 xl:flex 2xl:flex  xl:w-[40%] 2xl:w-[40%]'>
                        <div className={(pathname === "/") ? "text-[rgb(62,154,235)] font-bold border-b-4 flex items-center h-full" : "text-[rgb(98,179,249)]"} > <Link href={"/"}>Home</Link></div>
        
        </div>



        {/* sigout btn section */}
        <div className='w-[40%]   h-full flex items-center justify-end px-5 gap-5 xl:w-[20%] 2xl:w-[20%] md:gap-10 xl:gap-4 2xl:gap-5'>
            {/* search button */}
            <div  className='cursor-pointer   border border-[rgb(62,154,235)]  rounded-full p-2  hover:bg-[rgb(213,232,249)] '>
                <IoIosSearch className=' text-[rgb(62,154,235)]' />
            </div>

           
           


            {/* logout btn */}
                <PiUserCircleThin  className='cursor-pointer  text-[rgb(62,154,235)] w-11 h-11 hover:bg-orange-100 2xl:hidden xl:hidden md:hidden' />

            <button onClick={ async ()=>{
                // console.log(data.status);

                await signOut()
                
            }}  className='border hidden border-[rgb(62,154,235)]cursor-pointer  text-[rgb(62,154,235)] h-10 w-20 rounded-2xl font-semibold hover:border-black hover:text-black xl:w-30 xl:text-xl 2xl:w-40 2xl:block xl:block md:block'>Logout</button>
        </div>


     
        
    </div>
  )
}

export default Navbar