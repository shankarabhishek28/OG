import React from 'react'
import Slider from './Slider'
import Carousel from './Carousel'
import "./Home.css"
import Footer from './footer'
import BanquetForm from './BanquetForm'

const TopBanquets = () => {
  return (
    <div className='top_banq '>
      
      <Carousel />
      
      <Footer />
    </div>
  )
}

export default TopBanquets