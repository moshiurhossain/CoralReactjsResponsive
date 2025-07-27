import React from 'react'
import bgimgae from '../assets/images/backg.png'
import bbg from '../assets/images/bbg.png'
import zara from '../assets/images/zara.png'
import { Link } from 'react-router'

const BackgroungPart = () => {
  return (
    <section style={{background:`url(${bgimgae})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    backgroundPosition:'centre', 
                     }}
                   className=' w-full lg:pb-[93px]  lg:h-[772px] mt-2 lg:pt-[223px] pt-2 pb-5  flex justify-center'
    >
        <div className='text-white  mt-[29px] lg:ml-[600px]'>
            <div className='w-[89px] lg:w-[191px]'><img src={zara} alt="zara" /></div>
            <p className=':text-[18px] lg:w-[504px] lg:mt-[55px] lg:leading-[40px] lg:text-[26px] w-[204px] leading-[20px] mt-4 font-roboto font-normal'>Lustrous yet understated. The new evening
                    wear collection exclusively offered at the
                    reopened Giorgio Armani boutique in Los
                    Angeles.</p>
                    
                    <Link className='  mt-4 lg:mt-[55px] flex text-[12px] lg:text-[29px] lg:w-[237px] lg:h-[72px] h-[30px] justify-center items-center font-roboto font-normal w-[100px] bg-white text-black'>See Collection</Link>
        </div>
    </section>
  )
}

export default BackgroungPart