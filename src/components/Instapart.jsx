import React from 'react'
import CommonHeader from './common/CommonHeader'
import i1 from '../assets/images/i1.png'
import i2 from '../assets/images/i2.png'
import i3 from '../assets/images/i3.png'
import i4 from '../assets/images/i4.png'
import i5 from '../assets/images/i5.png'
import i6 from '../assets/images/i6.png'

const Instapart = () => {
  return (
    <section id='instapart ' className='lg:pt-[100px] pt-[60px] lg:pb-[100px] pb-[60px] bg-[rgba(30,40,50,0.05)]'>
        <div className="container">
         <CommonHeader text={'Follow products and discounts on Instagram'}/>
         <div className="instapicRow lg:mt-[60px] mt-[30px] flex lg:flex-row flex-col gap-[24px] ">
            <div className='lg:mx-0 mx-auto cursor-pointer'>
                <img className='  lg:hover:mt-[-10px] hover:ml-[-10px] duration-[.4s]' src={i1} alt="instaimage" />
            </div>
            <div  className='lg:mx-0 mx-auto cursor-pointer'>
                <img className='  lg:hover:mt-[-10px] hover:ml-[-10px] duration-[.4s]' src={i2} alt="instaimage" />
            </div>
            <div  className='lg:mx-0 mx-auto cursor-pointer'>
                <img className='  lg:hover:mt-[-10px] hover:ml-[-10px] duration-[.4s]' src={i3} alt="instaimage" />
            </div>
            <div className='lg:mx-0 mx-auto cursor-pointer'>  
                <img className='  lg:hover:mt-[-10px] hover:ml-[-10px] duration-[.4s]' src={i4} alt="instaimage" />
            </div>
            <div  className='lg:mx-0 mx-auto cursor-pointer'>
                <img className='  lg:hover:mt-[-10px] hover:ml-[-10px] duration-[.4s]' src={i5} alt="instaimage" />
            </div>
            <div  className='lg:mx-0 mx-auto cursor-pointer'>
                <img className='  lg:hover:mt-[-10px] hover:ml-[-10px] duration-[.4s]' src={i6} alt="instaimage" />
            </div>
         </div>
         <div className="inputbox lg:mt-[70px] mt-[30px] ">

         <CommonHeader text={'Or subscribe to the newsletter'}/>

         <div className='w-full lg:w-[760px] flex lg:justify-between lg:flex-row flex-col mx-auto mt-[74px] lg:mt-[34px] lg:gap-[26px]'>
            <div className='mx-auto lg:mx-0'><input className='lg:w-[643px] w-[300px] border-b-[2px] border-b-[#302d2d77] px-2  outline-0' placeholder='Email address...' type="text" /></div>
            <button className='font-opensans font-normal text-base w-[91px] lg:mt-0 mt-6 mx-auto lg:mx-0 border-b-[2px] border-b-[#302d2d77]'>Submit</button>
         </div>
         </div>
        </div>
        </section>
  )
}

export default Instapart