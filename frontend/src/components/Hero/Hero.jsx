import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
 
 
  return (
    <div className='hero container'>
    <div className='hero-text'>
        <h1>"Health First" Mobile Academy</h1>
        <p>"Health First Mobile Academy is dedicated to bringing quality healthcare and education to underserved communities. Through mobile services and innovative programs, we empower individuals to lead healthier, more informed lives."</p>
    <button className='btn' >Explore More <img src={dark_arrow} alt=""></img></button>
    </div>
    </div>
  )
}

export default Hero