import React from 'react'
import logo from '../assets/images/logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { Link } from 'react-router';


const FooterPart = () => {
  return (
    <footer>
     <div className="container">
      <div className="footer-row flex lg:flex-row flex-col lg:pt-[140px] lg:pb-[90px] pt-[70px] pb-[50px] gap-[56px]">
       <div className="item1 lg:w-[392px] w-[310px] mx-auto lg:mx-0">
        <div className='lg:w-[180px] w-[120px]'><img src={logo} alt="logo" /></div>
        <p className='mt-[32px] font-opensans font-normal lg:text-base text-[14px] lg:w-[392px] leading-8 text-[#1e2832bb]'> 
          
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</p>
            <div className="logo-row w-[208px] flex gap-[36px] mt-[32px] text-[20px]">
               <FaFacebookF />
               <FaTwitter />
               <FaLinkedinIn  />
               < CiInstagram  />
            </div>
       </div>
       <div className='flex lg:flex-row flex-col lg:gap-[138px] gap-[38px]'>
<div className="item2 mx-auto lg:mx-0 w-[200px] h-[212px] ">
  <h2 className=' font-opensans font-semibold text-base'>CATALOG</h2>
  <div className="libox flex flex-col mt-[22px] gap-[12px]">
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>Necklaces</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>hoodies</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>Jewelry Box</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>t-shirt</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>jacket</Link>
  </div>
</div>
<div className="item2 mx-auto lg:mx-0 w-[200px] h-[212px] ">
  <h2 className=' font-opensans font-semibold text-base'>ABOUT US</h2>
  <div className="libox flex flex-col mt-[22px] gap-[12px]">
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>Our Producers</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>Sitemap</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>FAQ</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>About Us</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>Terms & Conditions</Link>
  </div>
</div>
<div className="item2 mx-auto lg:mx-0 w-[200px] h-[212px]">
  <h2 className=' font-opensans font-semibold text-base'>CUSTOMER SERVICES</h2>
  <div className="libox flex flex-col mt-[22px] gap-[12px]">
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>Contact Us</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>Sitemap</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>Track Your Order</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>Product Care & Repair</Link>
    <Link to={'#'} className='font-opensans font-normal text-[12px] leading-[24px]'>Book an Appointmen</Link>
  </div>
</div>
       
       </div>
       
    
      </div>
     </div>
      </footer>
  )
}

export default FooterPart