import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import logo from  '../assets/images/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router';

const ResponsiveHeader = () => {

  const [showhead,setShowhead]= useState(false)

  const [showinput,setShowinput]=useState(false)
    
  return (
    <>
    <header className='lg:hidden px-2 pt-5 pb-1'>
      <div id='responsiveHeaderRow' className='flex justify-between items-center ' >
          <button onClick={()=>setShowinput(!showinput)} className='text-lg text-primary cursor-pointer'><CiSearch /></button>
          <img className='w-[150px]' src={logo} alt="logo" />
        <button className='text-lg text-primary cursor-pointer' onClick={()=>setShowhead(!showhead)} ><RxHamburgerMenu /></button>
      
               <div className={` ${showhead? 'scale-100':'scale-0'}
                headerButton_col duration-[.4s] flex items-center justify-center gap-[22px] w-full absolute left-0   top-[60px]`}>
                <Link className='flex items-center gap-[8px] text-[16px] text-primary font-roboto' to={''}><FaUser /> Account</Link>
                <Link className='flex items-center gap-[8px] text-[16px] text-primary font-roboto' to={''}><FaShoppingBag /> Shopping</Link>
               </div>
        
   
      </div>
    {
      showinput&&
      <>
   
    
      <div onClick={()=>setShowinput(false)} className={ ` ${setShowinput?'scale-100':'scale-0'} duration-[.4s] w-full h-screen bg-[#0000002a] absolute top-0 left-0`}></div>
     
       <div className={`flex flex-col items-center absolute duration-[.4s] bg-white py-2 gap-2.5 ${showinput?'top-0':'top-100'} left-0 w-full pt-5`}>
      <img className='w-[150px]' src={logo} alt="logo" />
      <div className='flex items-center border border-primary rounded-lg px-2' ><input type="text" className='outline-none border-none' /> <button className='cursor-pointer'><CiSearch /></button></div>
    </div>

      </>

    
    

    }

    </header>
   
   
    </>
  )
}

export default ResponsiveHeader