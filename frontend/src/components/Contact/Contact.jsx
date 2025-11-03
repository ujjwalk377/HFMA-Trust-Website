import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import Title from '../Title/Title'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a8e5fc8-13c4-4295-a1ef-5cfaee3c8130");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className='contact-col'>
        <Title subTitle='Contact Us' title='Get in Touch'/>
            <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
            <p>We’d love to hear from you! Whether you have questions, need more information about our programs, or want to get involved, our team is here to help. Reach out to us via phone, email, or by filling out the form below. We’ll get back to you as soon as possible.</p>
            <ul>
                <li><img src={mail_icon} alt=""/>etwarisewasansthan@gmail.com</li>
                <li><img src={phone_icon} alt=""/>+91 9871947707, 9870450463</li>
                <li><img src={location_icon} alt=""/>Office Address - E-107/A, Chhatarpur Extension, New Delhi-110074</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label>Write your message here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt=""/></button>
                </form>
                <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact