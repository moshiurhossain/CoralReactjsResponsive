import React, { useState } from 'react'
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router';



const ResponsiveMenu = () => {

   const navbaritems =[
  {
    navbarlink:'#',
    navbarcontent:'Jewelry & Accessories'
  },
  {
    navbarlink:'#',
    navbarcontent:'Clothing & Shoes'
  },
  {
    navbarlink:'#',
    navbarcontent:'Home & Living'
  },
  {
    navbarlink:'#',
    navbarcontent:'Wedding & Party'
  },
  {
    navbarlink:'#',
    navbarcontent:'Toys & Entertainment'
  },
  {
    navbarlink:'#',
    navbarcontent:'Art & Collectibles'
  },
  {
    navbarlink:'#',
    navbarcontent:'Craft Supplies & Tools'
  },
]

    // 

    const [showmenu,setShowmenu]=useState(false)

  return (
    <>
    
    <nav className='lg:hidden'>
        <div className={`h-screen w-[280px] bg-white absolute top-0 ${showmenu?'left-0':'left-[-88%] duration-[.4s]'} z-30 duration-[1s]`}>
                    <button  onClick={()=>setShowmenu(!showmenu)} className='w-[50px] h-[50px] text-2xl absolute top-[100px] cursor-pointer right-[-60px] z-10 text-primary bg-[] rounded-xl '>
                        {
                            showmenu?
                            <MdCancel />
                            :
                            <BiSolidFoodMenu />
                        }
                        
                        </button>
                             <ul className='flex flex-col items-center gap-5 justify-center h-screen '>
              {
                navbaritems.map((item)=>{
                return <li><Link to={item.navbarlink} className='text-base font-opensans leading-[24px] font-medium text-primary'>{item.navbarcontent}</Link></li>
                })
              }


            </ul>
        </div>

        <div className={`w-full h-screen absolute top-0 bg-[#0e0d0d4b] duration-[.4s] ${showmenu?'left-0':'left-[-100%] duration-[1s]'}`}></div>
    </nav>
    </>
  )
}

export default ResponsiveMenu