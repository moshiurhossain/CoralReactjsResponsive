import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const LayoutTwo = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default LayoutTwo