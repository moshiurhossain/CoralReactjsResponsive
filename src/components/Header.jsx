import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router';
import { FaShoppingBag } from "react-icons/fa";




const Header = () => {

const [showsearch,setShowsearch]=useState(false)




  return (
    <header className='hidden lg:block'>
      {/* header container starts */}
       <div className="container">
        <div className="header_row pt-[31px] pb-[25px] border-b border-[#E3E3E3] flex justify-between items-center">
            {/* search col start */}
               <div className="search_col texr-xl flex items-center text-[#1E2832] w-[220px]">
                <button onClick={()=>setShowsearch(!showsearch)} className='flex items-center cursor-pointer'><IoSearchOutline /></button>
                {/*  */}
                </div>
                  {/* search col end */}
               <div className="logo_col w-[180px] h-[]">
                <img className='w-full' src={logo} alt="logo" />
               </div>
               <div className="headerButton_col flex gap-[22px] w-[221px]">
                <Link className='flex items-center gap-[8px] text-[18px] text-primary font-roboto' to={''}><FaUser /> Account</Link>
                <Link className='flex items-center gap-[8px] text-[18px] text-primary font-roboto' to={''}><FaShoppingBag /> Shopping</Link>
               </div>
        </div>
       </div>
       {/* header container ends */}
      {
      showsearch ?
      <>
           {/* overlay starts */}
       <div onClick={()=>setShowsearch(false)} className='w-full h-screen bg-[#00000065] absolute top-0 left-0'></div>
       {/* overlay ends */}
       {/* searchbar starts */}
       <div className='w-full bg-white h-[90px] absolute top-0 left-0 px-[50px] flex items-center justify-between'>
        {/* ================================================= */}
             <div className="logo_col w-[180px] h-[]">
                <img className='w-full' src={logo} alt="logo" />
            </div>
            {/* ============================================= */}
            <div className='search_input w-[550px] h-[40px] border rounded-lg flex px-5'>
              <input className='w-full border-none outline-none' type="text" placeholder='Search....'/>
               <button className='flex items-center'><IoSearchOutline /></button>
              </div>
              {/* ============================================ */}
                <div className="headerButton_col flex gap-[22px]">
                <Link className='flex items-center gap-[8px] text-[18px] text-primary font-roboto' to={''}><FaShoppingBag /> Shopping</Link>
               </div>
                   {/* ============================================ */}
       </div>
       {/* searchbar ends */}
      
      </> 
      :
      ''


      }
  
    </header>
  )
}

export default Header