import React, {useState} from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f4a11d4-6ccf-465d-88ce-9c3d4b70ab96");

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
    <div id ='contact'className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Connect</h1>
                <p>I am currently available to take new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>dhvanik03@gmail.com</p>
                    </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+91 9265465871</p>
                    </div>
                <div className="contact-detail">
                      <img src={location_icon} alt="" /><p>Gandhinagar,Gujarat,India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text"placeholder='Enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" placeholder='Enter your message' rows="8"></textarea>
                <button className='contact-submit' type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact