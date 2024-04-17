import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/dhvani_img.jpg'
import Skills_data from '../../assets/skills_data'
const About = () => {
  return (
    <div id ='about'className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I'm Dhvani Chokshi, a passionate B.Tech. Computer Science student.</p>
                    <p>I'm particularly enthusiastic about front-end web development, showcasing my skills through projects like responsive landing pages and interactive web applications. Outside of academics, I actively contribute to tech initiatives and volunteer for causes promoting education and technology accessibility.</p>
                </div>
            </div>
        </div>
        <div className="skill-title">
            <h1>Skills& Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="skill-sections">
            <div className="skill-left">
                <div className="skill-container">
                    {Skills_data.map((skills,index)=>{
                    return <div key={index} className="skill-format">
                    <img key={index}src={skills.s_img} alt=""></img>
                    <h3>{skills.s_name}</h3>
                </div>
                    })}
                </div>
            </div>
           
            <div className="skill-right">
                <div className="skill-para">
                    <p>NIT Surat Dotslash 7.0 Hackathon | Participant</p>
                    <p>Solving for Smart India Hackathon'23</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
