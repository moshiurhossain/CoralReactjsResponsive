import React from 'react'
import brand1 from '../assets/images/brand1.png'
import brand2 from '../assets/images/brand2.png'
import brand3 from '../assets/images/brand3.png'
import brand4 from '../assets/images/brand4.png'
import brand5 from '../assets/images/brand5.png'

const Brands = () => {
  return (
        <section id='brand' className='lg:pt-[90px] pt-[40px] lg:pb-[90px] pb-[30px]'>
        <div className="container">
            <div className="brand-row flex lg:flex-wrap flex-col lg:flex-row lg:justify-between justify-center gap-6 lg:gap-0 items-center">
                <div className='lg:w-[200px] w-[150px]'>
                    <img src={brand1} alt="brandimage" />
                </div>
                <div className='lg:w-[200px] w-[150px]'>
                    <img src={brand2} alt="brandimage" />
                </div>
                <div className='lg:w-[200px] w-[150px]'>
                    <img src={brand3} alt="brandimage" />
                </div>
                <div className='lg:w-[200px] w-[150px]'>
                    <img src={brand4} alt="brandimage" />
                </div>
                <div className='lg:w-[200px] w-[150px]'>
                    <img src={brand5} alt="brandimage" />
                </div>
            </div>
        </div>
        </section>
  )
}

export default Brands