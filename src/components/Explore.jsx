import React from 'react'
import c10 from '../assets/images/c0.png'
import c1 from '../assets/images/c1.png'
import c2 from '../assets/images/c2.png'
import c3 from '../assets/images/c3.png'
import c4 from '../assets/images/c4.png'
import { Link } from 'react-router'

const Explore = () => {
  return (
    <section id='explore' className=' '>
        <div className="container">
      <div className="explore-row flex  flex-col gap-6 lg:flex-row justify-center">
    <div className='explore-left lg:w-[648px] w-[300px] lg:h-[648px] relative mx-auto lg:mx-0 group'>
       <Link to={'#'} className=''><img src={c10} alt="exploreimage" />
      
        </Link> 
        <h2 className='font-roboto font-normal lg:text-[34px] text-[15px] absolute bottom-[50%] left-[-30%] lg:left-[-40%] rotate-[-90deg]'>Explore new and popular styles</h2>
       
    </div>
    <div className='explore-right lg:w-[648px] w-[300px] mx-auto lg:mx-0 lg:h-[648px] flex flex-wrap  gap-6'>
        <div className=" w-[290px] h-[280px] relative group overflow-hidden">
                  <img className='group-hover:scale-[1.1] duration-[.4s]' src={c1} alt="exploreimage" />
                  <div className='bg-[#332f2f85] w-full h-[290px] cursor-pointer absolute duration-[.8s] group-hover:right-0 top-0 right-100 flex justify-center items-center'>
                   <Link><h2 className='font-opensans text-base text-white px-5 py-1 bg-[#555050]'>Shop</h2></Link> 
                  </div>
             </div>
        <div className=" w-[290px] h-[280px] relative group overflow-hidden">
                  <img className='group-hover:scale-[1.1] duration-[.4s]' src={c2} alt="exploreimage" />
                  <div className='bg-[#332f2f85] w-full h-[290px] cursor-pointer absolute duration-[.8s] group-hover:right-0 top-0 right-100 flex justify-center items-center'>
                   <Link><h2 className='font-opensans text-base text-white px-5 py-1 bg-[#555050]'>Shop</h2></Link> 
                  </div>
             </div>
        <div className=" w-[290px] h-[280px] relative group overflow-hidden">
                  <img className='group-hover:scale-[1.1] duration-[.4s]' src={c3} alt="exploreimage" />
                  <div className='bg-[#332f2f85] w-full h-[290px] cursor-pointer absolute duration-[.8s] group-hover:right-0 top-0 right-100 flex justify-center items-center'>
                   <Link><h2 className='font-opensans text-base text-white px-5 py-1 bg-[#555050]'>Shop</h2></Link> 
                  </div>
             </div>
        <div className=" w-[290px] h-[280px] relative group overflow-hidden">
                  <img className='group-hover:scale-[1.1] duration-[.4s]' src={c4} alt="exploreimage" />
                  <div className='bg-[#332f2f85] w-full h-[290px] cursor-pointer absolute duration-[.8s] group-hover:right-0 top-0 right-100 flex justify-center items-center'>
                   <Link><h2 className='font-opensans text-base text-white px-5 py-1 bg-[#555050]'>Shop</h2></Link> 
                  </div>
             </div>
     
        
      
    </div>
      </div>
        </div>
        </section>
  )
}

export default Explore