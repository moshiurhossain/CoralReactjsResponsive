import React from 'react'

const CommonHeader = ({text},) => {
  return (
    <h2 className='lg:text-[50px] text-[16px] font-roboto font-medium text-black text-center capitalize'>{text}</h2>
  )
}

export default CommonHeader