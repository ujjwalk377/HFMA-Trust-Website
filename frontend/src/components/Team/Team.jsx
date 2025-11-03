import React, { useRef } from 'react'
import './Team.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Team = () => {

    const slider=useRef();
        let tx=0;
    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt=""/>
                            <div>
                                <h3>Ashok Kumar</h3>
                                <span>Chhatarpur, New Delhi</span>
                            </div>
                        </div>
                        <p>Honourable President of the HEALTH FIRST MOBILE ACADEMY TRUST</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt=""/>
                            <div>
                                <h3>Chandrasen Singh</h3>
                                <span>Chhatarpur, New Delhi</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quam ea culpa magni. Laborum nesciunt error, aut enim earum delectus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt=""/>
                            <div>
                                <h3>Pramod Kumar</h3>
                                <span>Chhatarpur, New Delhi</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quam ea culpa magni. Laborum nesciunt error, aut enim earum delectus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt=""/>
                            <div>
                                <h3>Sandhya Mohanti</h3>
                                <span>Chhatarpur, New Delhi</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quam ea culpa magni. Laborum nesciunt error, aut enim earum delectus.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Team