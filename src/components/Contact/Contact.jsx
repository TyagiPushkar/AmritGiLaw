import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "39585d4b-75be-4eef-8574-89f980365de0");

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
      <>
        <div className='contact'>
            <div className="contact-col">
                
                <div style={{ marginTop: "10px", textAlign: "center" }}>
       
        <div style={{ width: "100%", height: "350px", marginTop: "20px" }}>
          <iframe
  title="location-map"
  width="80%"
  height="400"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.4899564192885!2d77.8787603!3d29.9350683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094b1a74081859%3A0x53533791fc112a51!2sAmrit%20Law%20College!5e0!3m2!1sen!2sin!4v1695032832952!5m2!1sen!2sin"
/>


        </div>
      </div>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                                    <h3>Send us a message <img src={msg_icon} alt="" /></h3>

                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your email here</label>
                    <input type="email" name='email' placeholder='Enter your e-mail' required />
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
        
                
       </>
    )
}

export default Contact;
