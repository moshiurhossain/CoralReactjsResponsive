import React from 'react'
import CommonHeader from './common/CommonHeader'
import { Link } from 'react-router'
import { FaFilter } from "react-icons/fa6";
import SingleCardproduct from './common/SingleCardproduct';
import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.png'
import p4 from '../assets/images/p4.png'
import p5 from '../assets/images/p5.png'
import p6 from '../assets/images/p6.png'
import p7 from '../assets/images/p7.png'
import p8 from '../assets/images/p8.png'


const Subscribe = () => {
  return (
    <section id='subscrbe' className='lg:pt-[140px] pt-[80px] lg:pb-[140px] pb-[80px]'>
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
           <div className="sliderpart mt-[35px] flex flex-wrap lg:gap-[10px] gap-2 justify-center">
        
          
         
             <SingleCardproduct
             pimg={p2}
             ptitle={'Adicolor Classics Joggers print Scarf'}
             pname={'Dress'}
             pprice={'$63.85'}
             />
             <SingleCardproduct
             pimg={p3}
             ptitle={'Nike Sportswear Futura Luxe'}
             pname={'Bag'}
             pprice={'$130.00'}
             />
             <SingleCardproduct
             pimg={p1}
             ptitle={'Geometric print Scarf'}
             pname={'Scarf'}
             pprice={'$53.00'}
             />
             <SingleCardproduct
             pimg={p4}
             ptitle={'Yellow Reserved Hoodie'}
             pname={'Dress'}
             pprice={'$364.00'}
             />
             <SingleCardproduct
             pimg={p5}
             ptitle={'Basic Dress Green'}
             pname={'Dress'}
             pprice={'$236.00'}
             />
             <SingleCardproduct
             pimg={p6}
             ptitle={'Nike Air Zoom Pegasus'}
             pname={'Shoe'}
             pprice={'$220.00'}
             />
             <SingleCardproduct
             pimg={p7}
             ptitle={'Nike Repel Miler'}
             pname={'Dress'}
             pprice={'$120.50'}
             />
             <SingleCardproduct
             pimg={p8}
             ptitle={'Nike Sportswear Futura Luxe'}
             pname={'Glasses'}
             pprice={'$153.00'}
             />
           </div>
       </div>
    </section>
  )
}

export default Subscribe