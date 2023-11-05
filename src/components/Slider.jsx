import React from 'react'
import './Home.css'
import '../components/Slider.css'
const Slider = () => {
    return (
        <>
            <div className="heading">
                <h1 className='top'>TRENDING</h1>
                <h2 className='top2'>TRENDING</h2>
            </div>
            <div className='control-slider animated'>

                <div className='slider-container'>
                    <div className='slider'>
                        <div className='img-container'>
                            <img src='../src/Images/banquet.jpg' />
                        </div>

                        <button className='book-btn'>Book Now</button>

                    </div>
                    <div className='slider'>
                        <div className='img-container'>
                            <img src='../src/Images/banquet1.jpg' />
                        </div>

                        <button className='book-btn'>Book Now</button>

                    </div>
                    <div className='slider'>
                        <div className='img-container'>
                            <img src='../src/Images/banquet2.jpg' />
                        </div>

                        <button className='book-btn'>Book Now</button>

                    </div>
                    <div className='slider'>
                        <div className='img-container'>
                            <img src='../src/Images/banquet3.jpeg' />
                        </div>

                        <button className='book-btn'>Book Now</button>

                    </div>
                    <div className='slider'>
                        <div className='img-container'>
                            <img src='../src/Images/banquet6.jpg' />
                        </div>

                        <button className='book-btn'>Book Now</button>

                    </div>
                    <div className='slider'>
                        <div className='img-container'>
                            <img src='../src/Images/banquet7.jpg' />
                        </div>

                        <button className='book-btn'>Book Now</button>

                    </div>
                    <div className='slider'>
                        <div className='img-container'>
                            <img src='../src/Images/banquet8.png' />
                        </div>

                        <button className='book-btn'>Book Now</button>

                    </div>
                    <div className='slider'>
                        <div className='img-container'>
                            <img src='../src/Images/banquet9.png' />
                        </div>

                        <button className='book-btn'>Book Now</button>

                    </div>
                    <div className='slider'>
                        <div className='img-container'>
                            <img src='../src/Images/banquets10.jpg' />
                        </div>

                        <button className='book-btn'>Book Now</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider