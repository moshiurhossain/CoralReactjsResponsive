import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {

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

  return (
    <>
      <nav id='navbar' className='pt-[30px] hidden lg:block' >
         <div className="container">
            <ul className='flex justify-between'>
              {
                navbaritems.map((item)=>{
                return <li><Link to={item.navbarlink} className='text-base font-opensans leading-[24px] font-normal'>{item.navbarcontent}</Link></li>
                })
              }


            </ul>
         </div>
      </nav>
    </>
  
  )
}

export default Navbar