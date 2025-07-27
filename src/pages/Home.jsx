import React from 'react'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import Explore from '../components/Explore'
import Subscribe from '../components/Subscribe'
import BackgroungPart from '../components/BackgroungPart'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Brands/>
      <Explore/>
      <Subscribe/>
      <BackgroungPart/>
    </div>
  )
}

export default Home