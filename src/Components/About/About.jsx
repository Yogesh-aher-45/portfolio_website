import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-tittle">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Creative Frontend Developer skilled in HTML, CSS, JavaScript, and React.js, building responsive, user-friendly web interfaces with precision.
            </p>
            <p>Passionate Frontend Developer with expertise in modern web technologies, crafting clean, responsive, and interactive user interfaces for seamless digital experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%", margin:"0px"}}/></div>
            <div className="about-skill"><p>React js</p><hr style={{width:"70%",margin:"0px"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"50%",margin:"0px"}}/></div>
          </div>
        </div>
      </div>
    <div className="about-achivements">
      <div className="about-achivement">
        <h1>2+</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      <div className="about-achivement">
        <h1>7+</h1>
        <p>PROJECTS COMPLETED</p>
      </div>
      <hr />
      <div className="about-achivement">
        <h1>1+</h1>
        <p>HAPPY CLIENTS</p>
      </div>
     

    </div>
    </div>
  )
}

export default About