import React from 'react'
import './Services.css'
import service_1 from '..//../assets/service_1.jpeg'
import service_2 from '..//../assets/service_2.jpeg'
import service_3 from '..//../assets/service_3.jpeg'
import Title from '../Title/Title'

const Services = () => {
  return (
    
    <div className='services'>
        <div className="service">
           
            <img src={service_1} alt="service_1" />
            <div className="caption">
                <img src="" alt=""/>
                <p>Yoga Classes</p>
            </div>
        </div>
        <div className="service">
            <img src={service_2} alt="service_2" />
            <div className="caption">
                <img src="" alt=""/>
                <p>Natural Treatment</p>
            </div>
        </div>
        <div className="service">
            <img src={service_3} alt="service_3" />
            <div className="caption">
                <img src="" alt=""/>
                <p>Naturopathy and Accupressure</p>
            </div>
        </div>
    </div>
  )
}

export default Services