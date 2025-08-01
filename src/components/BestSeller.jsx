import React from 'react'
import CommonHeader from './common/CommonHeader'
import { Link } from 'react-router'
import { FaFilter } from "react-icons/fa6";
import SingleCardproduct from './common/SingleCardproduct';
import p1 from '../assets/images/p1.png'
import p5 from '../assets/images/p5.png'
import p3 from '../assets/images/p3.png'
import p6 from '../assets/images/p6.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import '../App.css'

const BestSeller = () => {

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <section id='bestseller' className='lg:pt-[140px] lg:pb-[140px] pt-8 pb-8'>
        <div className="container">

      
        <CommonHeader
        text={'Best sellers'}
        />
             {/* nav tabs starts */}
         <div className='flex items-center justify-between lg:mt-[40px] mt-[26px] lg:px-0 px-1'>
          <div className="subsbutton flex lg:gap-[40px] gap-2">
            <button className='font-opensans font-semibold lg:text-base text-[12px] capitalize'>all products</button>
            <button className='font-opensans font-semibold lg:text-base text-[12px] text-[#0000007e] capitalize'>t-shirt</button>
            <button className='font-opensans font-semibold lg:text-base text-[12px] text-[#0000007e] capitalize'>hoodies</button>
            <button className='font-opensans font-semibold lg:text-base text-[12px] text-[#0000007e] capitalize'>jacket</button>
          </div>
          <div className="sublinks pb-1 lg:pb-4">
             <Link className='flex items-center justify-center lg:w-[92px] lg:h-[32px] w-[66px] lg:text-base text-[12px] font-opensans font-normal bg-primary text-white gap-1 '>
             <FaFilter />
             Filter
             </Link>
          </div>
         </div>
           {/* nav tabs ends */}
           {/* slider img start */}
               <div className="slider-container slider-rel">
                     <Slider {...settings}>
                        <div>
            <SingleCardproduct
             pimg={p6}
             ptitle={'Nike Air Zoom Pegasus'}
             pname={'Shoe'}
             pprice={'$220.00'}
             />
                        </div>
                        <div>
            <SingleCardproduct
             pimg={p1}
             ptitle={'Geometric print Scarf'}
             pname={'Scarf'}
             pprice={'$53.00'}
             />
                        </div>
                        <div>
            <SingleCardproduct
             pimg={p3}
             ptitle={'Nike Sportswear Futura Luxe'}
             pname={'Bag'}
             pprice={'$130.00'}
             />
                        </div>
                        <div>
            <SingleCardproduct
             pimg={p5}
             ptitle={'Basic Dress Green'}
             pname={'Dress'}
             pprice={'$236.00'}
             />
                        </div>
                     </Slider>
         
               </div>
           {/* slider img end */}
            </div>
        </section>
  )
}

export default BestSeller