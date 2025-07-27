import React from 'react'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import Explore from '../components/Explore'
import Subscribe from '../components/Subscribe'
import BackgroungPart from '../components/BackgroungPart'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Brands/>
      <Explore/>
      <Subscribe/>
      <BackgroungPart/>
      <BestSeller/>
    </div>
  )
}

export default Home