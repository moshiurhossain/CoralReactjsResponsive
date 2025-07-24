import React from 'react'
import bimage from '../assets/images/bimage.png'
import bimage2 from '../assets/images/bannerimage.png'
import { Link } from 'react-router'
import { FaShoppingBag } from "react-icons/fa";
const Banner = () => {
  return (
    <>
    <section style={{background:`url(${bimage})`,
                     backgroundRepeat:'no-repeat',
                     backgroundSize:'cover',
                     backgroundPosition:'centre',}} id='banner' 
                     className=' lg:pt-[225px] lg:pb-[60px] py-[55px] px-3'>

             <div className="container">
                <div className="banner-row flex flex-wrap items-center justify-between pt-[81px]">
                       {/* textpart start */}
                       <div className="banner-text lg:mt-[74px]">
                        <h1 className='lg:text-[74px] text-[45px] leading-[55px] font-light text-roboto text-black'>Collections</h1>
                        <h2 className=' text-roboto  lg:text-[30px] text-[17px] lg:leading-[55px] leaging-[28px] font-normal w-full lg:w-[682px] lg:mt-[52px] mt-[20px] mb-[35px] lg:mb-[66px]'>
                          you can explore ans shop many differnt collection
                          from various barands here.
                        </h2>

                        <Link to={'#'} className='mb-8 lg:mb-0 flex w-[140px] h-[45px] rounded-[5px] items-center justify-center gap-[8px]  text-roboto lg:text-[29px] font-normal lg:w-[223px] lg:h-[72px] bg-[#1E2832] text-white'><FaShoppingBag/> Shop Now</Link>
                       </div>
                       {/* textpart end */}
                       {/* imagepart start */}
                       <div className="banner-image">
                        <img src={bimage2} alt="bannerimage" />
                       </div>
                       {/* imagepart end */}
                </div>
             </div>

                     </section>
    </>
  )
}

export default Banner