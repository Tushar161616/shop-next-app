import React from 'react'
import Navbar from "@/components/Navbar";
import Product from '@/Product';
import { MdOutlineStar } from "react-icons/md";


const page = () => {

 
  

  return (
    <div>
      <Navbar />

        
     
     <div className=' w-full h-full mt-10 p-5 flex flex-wrap gap-15 items-center justify-center'>
        {
          Product.map((item,index)=>(
             <div key={index} className='w-70 h-100 border border-gray-300 shadow-2xl rounded-2xl p-3 flex flex-col justify-evenly'>
                  <img src={item.image} className=' w-full h-[60%] rounded-xl'  />
                  <div className='text-2xl text-[rgb(62,154,235)]'>{item.name}</div>
                  
                 

                   <div className='flex items-center justify-start gap-2'>
                    
                      
                      <MdOutlineStar className='text-yellow-400 w-4 h-4' />
                      <MdOutlineStar className='text-yellow-400 w-4 h-4' />
                      <MdOutlineStar className='text-yellow-400 w-4 h-4' />
                      <MdOutlineStar className='text-yellow-400 w-4 h-4' />
                      <MdOutlineStar className='text-yellow-400 w-4 h-4' />
                     
                    </div>


                  
                    <div className="text-green-500 text-2xl font-bold" >${item.price}</div>
                    
               

                  <button className='bg-[rgb(88,176,253)] rounded text-white w-full h-10 rounded text-lg hover:bg-[rgb(62,154,235)]'>More Details</button>
                    
       
        </div>
          ))
        }

      

      </div>
      </div>
  )
}

export default page