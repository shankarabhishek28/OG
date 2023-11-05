import React from 'react'
import '../components/Home.css'

import '../components/Slider.css'
import Carousel from './Carousel'
import Footer from './footer'
import AboutSection from './About'
import BanquetForm from './BanquetForm'

const Home = () => {

    return (
        <div className='big'>
            <div className='vid-container'>
            <BanquetForm />
                <video autoPlay loop muted controls={false}>
                    <source src="../src/Images/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h1 className='vid-title'>BOOK YOUR BANQUETS</h1>
                
                <div className='btn-container'>
                    
                    <button className='btn'>CONTACT US</button>
                    <button className='btn'>BOOK NOW </button>
                </div>
                



            </div>
            <AboutSection />
           <div className="heading">
           <h1 className='top'>TOPBANQUETS</h1>
           <h2 className='top2'>TOP BANQUETS</h2>
           </div>
           
            <Carousel />
            <Footer />
        </div>

    )
}

export default Home