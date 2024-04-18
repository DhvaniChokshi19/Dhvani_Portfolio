import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Project = () => {
  return (
    <div id='projects'className='projects'>
        <div className="projects-title">
            <h1>My projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="projects-container">
            {mywork.map((work,index)=>{
                return <div key={index} className='project-format'>
                <a href={work.w_link} target='_blank'><img key={index}src={work.w_img} alt=""></img></a>
                <h3>{work.w_name}</h3>
                </div>
            })}
        </div>
        <div className="projects-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Project