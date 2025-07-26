import React from 'react'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import Explore from '../components/Explore'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Brands/>
      <Explore/>
      <Subscribe/>
    </div>
  )
}

export default Home