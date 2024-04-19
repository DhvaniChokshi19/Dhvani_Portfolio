import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/dhvans_logo.png'
// import user_icon from '../../assets/user_icon.svg'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <a href='https://www.linkedin.com/in/dhvani-chokshi19/' target='_blank'><img src={linkedin} alt="" /></a>
                    <a href ="https://github.com/DhvaniChokshi19" target="_blank"><img src={github} alt="" /></a>
                </div>
                {/* <div className="footer-subscribe">
                    Subscribe</div> */}
            </div>
        </div>
        <hr></hr>
        <div className="footer-bottom">
           {/* <p className="footer-bottom-left">
            Copyright Dhvani. All rights reserved. </p>  */}
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                
            </div>
        </div>
    </div>
  )
}

export default Footer