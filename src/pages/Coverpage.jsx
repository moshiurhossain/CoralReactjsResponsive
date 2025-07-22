import React from 'react'
import { Link } from 'react-router'
import coverimage from '../assets/images/cover.png'
import basketball from '../assets/images/v1.png'
import instapic from '../assets/images/v2.png'
import logo from '../assets/images/logo.png'


const Coverpage = () => {
  return (
    <>
    <div className='bg-black '>
     <div>
        <div className='absolute bg-[#FAF7F3] left-[50%] bottom-[50%] z-10 px-2 translate-x-[-50%] translate-y-[-50%]  rounded-lg flex items-center justify-center  '>
            <Link to='/main'><img className='h-[40px]' src={logo} alt="logo" /></Link>
        </div>

        
<img className=' mx-auto w-[90%]  relative' src={coverimage} alt="coverimage" />



<div className='w-[90%] mx-auto mt-[50px] h-[200px] bg-white flex justify-center items-center'>
  <div className='w-[95%] h-[160px] border border-gray-500 border-dotted flex items-center justify-evenly'> 
           <div className='flex items-center'>
            <img src={basketball} alt="basket" />
            <a className='border-b-2 text-[33px] font-medium ml-[32px] font-roboto' href="#">Dribbble.Com/Bezidesign</a>
            </div>
           <div className='flex items-center'>
            <img src={instapic} alt="basket" />
            <a className='border-b-2 text-[33px] font-medium ml-[32px]  font-roboto' href="#">Dribbble.Com/Bezidesign</a>
            </div>
  </div>
</div>
          
     </div>
        
     
      

    </div>
 
    </>
 
  )
}

export default Coverpage