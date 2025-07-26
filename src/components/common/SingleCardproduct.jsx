import React from 'react'
import p1 from '../../assets/images/p1.png'

const SingleCardproduct = ({pimg,ptitle,pname,pprice}) => {
  return (
    <>
   
   <div className='w-[312px] h-[478px] hover:bg-[#ada7a72c] duration-[.4s] pb-[1px]'>
    <div className="productimage w-full h-[400px] overflow-hidden group cursor-pointer">
        <img className='group-hover:scale-[1.1] duration-[.4s]' src={pimg} alt="productimage" />
    </div>
    <div className="productdetails lg:mt-[18px] w-[292px] mx-auto">
         <h2 className='font-opensans lg:text-base font-semibold '>{ptitle}</h2>
         <div className="nameNprice flex justify-between mt-[16px] lg:text-base font-opensans">
           <p className='text-[#0000007c] font-normal'>{pname}</p>
           <p className='text-[#000] font-semibold'>{pprice}</p>
         </div>
    </div>
    
   </div>
    </>
  )
}

export default SingleCardproduct