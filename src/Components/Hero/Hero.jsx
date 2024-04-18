import React from 'react'
import './Hero.css'
import profile_img from'../../assets/profile_1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id ="home"className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Dhvani Chokshi,</span> Web developer based in India.</h1>
        <p>Currently in my third year pursuing a Bachelor's degree in Computer Science Engineering at Pandit Deendayal Energy University.</p>
        <div className="hero-action">
            <div className="hero-connect">
               <AnchorLink className='anchor-link' offset = {50} href='#contact'>Connect with me</AnchorLink>
            </div>
            <div className="hero-resume">
               <a target="_blank" href='https://drive.google.com/file/d/1sfow9JgF4sV4iAsrfuFMd6ybGTmZev_K/view?usp=sharing'>My Resume</a> 
            </div>
        </div>
    </div>
  )
}

export default Hero