import React from 'react'
import './Skills.css' 
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <div className="skills-title">
            <h1>Experience. Evolve. Excel.</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="skills-container">
            {Services_data.map((service,index)=>{
                return <div key={index} className="skills-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    {/* <div className="skills-readmore">
                        <p>Read more</p>
                        <img src={arrow_icon} alt="" />
                    </div> */}
                </div>
            })}
        </div>
    </div>
  )
}

export default Skills