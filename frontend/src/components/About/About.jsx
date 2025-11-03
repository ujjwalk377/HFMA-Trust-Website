import React from 'react'
import './About.css'
import play_icon from '../../assets/play-icon.png'
import about_img from '../../assets/about.jpg'
import white_arrow from '../../assets/white-arrow.png'
import Team from '../Team/Team'
import Title from '../Title/Title'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

const About = ({setPlayState}) => {
  return (
    <>
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT US</h3>
            <h2>Health First Mobile Health Academy</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, odit expedita perferendis id tenetur cum nesciunt, eveniet temporibus veniam quisquam unde dolores harum, delectus autem atque modi nihil? Recusandae, officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus repellat nemo optio asperiores veritatis aliquam ipsam accusamus assumenda voluptates quidem ab iure, obcaecati officiis voluptatem magni placeat quos! Hic.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, cumque. Esse id sint natus aliquam quidem cupiditate. Ullam neque sapiente tenetur quibusdam quasi omnis, unde libero dignissimos ipsam esse. Temporibus.</p>
            <button className='btn dark-btn' >See More Here <img src={white_arrow} alt=""/></button>
        </div>
    </div>
    <Title subTitle='Team' title='Our Core Members'/>
    <Team/>
    </>
  )
}

export default About