import React from 'react'
import CommonHeader from './common/CommonHeader'
import { Link } from 'react-router'
import { FaFilter } from "react-icons/fa6";
import SingleCardproduct from './common/SingleCardproduct';
import p1 from '../assets/images/p1.png'


const Subscribe = () => {
  return (
    <section id='subscrbe' className='lg:pt-[140px] pt-[80px]'>
       <div className="container">
         <CommonHeader 
         text='Or subscribe to the newsletter'
         />
         {/* nav tabs starts */}
         <div className='flex items-center justify-between lg:mt-[40px] mt-[26px] lg:px-0 px-1'>
          <div className="subsbutton flex lg:gap-[40px] gap-2">
            <button className='font-opensans font-semibold lg:text-base text-[12px] capitalize'>all products</button>
            <button className='font-opensans font-semibold lg:text-base text-[12px] text-[#0000007e] capitalize'>t-shirt</button>
            <button className='font-opensans font-semibold lg:text-base text-[12px] text-[#0000007e] capitalize'>hoodies</button>
            <button className='font-opensans font-semibold lg:text-base text-[12px] text-[#0000007e] capitalize'>jacket</button>
          </div>
          <div className="sublinks ">
             <Link className='flex items-center justify-center lg:w-[92px] lg:h-[32px] w-[66px] lg:text-base text-[12px] font-opensans font-normal bg-primary text-white gap-1 '>
             <FaFilter />
             Filter
             </Link>
          </div>
         </div>
           {/* nav tabs ends */}
           <div className="sliderpart mt-[35px] flex flex-wrap lg:gap-[10px] justify-center">
        
          
         
             <SingleCardproduct
             pimg={p1}
             ptitle={'Geometric print Scarf'}
             pname={'Scarf'}
             pprice={'$53.00'}
             />
             <SingleCardproduct
             pimg={p1}
             ptitle={'Geometric print Scarf'}
             pname={'Scarf'}
             pprice={'$53.00'}
             />
             <SingleCardproduct
             pimg={p1}
             ptitle={'Geometric print Scarf'}
             pname={'Scarf'}
             pprice={'$53.00'}
             />
             <SingleCardproduct
             pimg={p1}
             ptitle={'Geometric print Scarf'}
             pname={'Scarf'}
             pprice={'$53.00'}
             />
             <SingleCardproduct
             pimg={p1}
             ptitle={'Geometric print Scarf'}
             pname={'Scarf'}
             pprice={'$53.00'}
             />
             <SingleCardproduct
             pimg={p1}
             ptitle={'Geometric print Scarf'}
             pname={'Scarf'}
             pprice={'$53.00'}
             />
             <SingleCardproduct
             pimg={p1}
             ptitle={'Geometric print Scarf'}
             pname={'Scarf'}
             pprice={'$53.00'}
             />
             <SingleCardproduct
             pimg={p1}
             ptitle={'Geometric print Scarf'}
             pname={'Scarf'}
             pprice={'$53.00'}
             />
           </div>
       </div>
    </section>
  )
}

export default Subscribe