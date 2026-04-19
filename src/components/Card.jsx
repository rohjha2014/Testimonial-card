import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

// import profile from "../assets/myprofile.jpeg";

const Card = (props) => {
  let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
       <div className='absolute top-[-7rem] mx-auto z-[10]'>
           <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'
            src={review.image}  />
       
             <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px]  z-[-10] left-[10px]'> </div>

        </div>

       <div className='text-center mt-7'>
         
          <p className='font-bold text-2xl capitalize'> {review.name} </p>
       </div>

       <div className='text-center '>
           <p className='text-violet-300 text-sm uppercase'>{review.job}</p>
       </div>

       <div className='text-violet-400 mx-auto mt-5'>
          <FaQuoteLeft/>
       </div>

       <div className='text-centers mt-4 text-slate-500'>
        <p>{review.text}</p>
       </div>

       <div className='text-violet-400 mx-auto mt-5'> 
          <FaQuoteRight/>
       </div>

       

    </div>
  )
}

export default Card
