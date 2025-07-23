import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ResponsiveHeader from '../components/ResponsiveHeader'
import ResponsiveMenu from '../components/ResponsiveMenu'


const LayoutTwo = () => {

 

  return (
    <>
    <Header/>
    <ResponsiveHeader/>
    <ResponsiveMenu/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default LayoutTwo