import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';


const Hero = () => {

  const cld = new Cloudinary({ cloud: { cloudName: 'dirom3dgz' } });
  

  const img = cld
        .image('hero_mxwz1m')
        .format('auto') 
        .quality('auto')
        .resize(auto().gravity(autoGravity()));
 
 
  return (
    <div className='hero container'>
      <AdvancedImage cldImg={img} className="hero-bg"/>
    <div className='hero-text'>
        <h1>"Health First" Mobile Academy</h1>
        <p>"Health First Mobile Academy is dedicated to bringing quality healthcare and education to underserved communities. Through mobile services and innovative programs, we empower individuals to lead healthier, more informed lives."</p>
    <button className='btn' >Explore More <img src={dark_arrow} alt=""></img></button>
    </div>

    
    </div>
  )
}

export default Hero