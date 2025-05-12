import React from 'react'
import './Mywork.css'
import arrow_icon from '../../assets/arrow_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
const Mywork = () => {
  return (
    <div id='mywork' className="mywork">
        <div className="mywork-title">
            <h1>My Letest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
          {mywork_data.map((work,idx)=>{
            return <img key={idx} src={work.w_img} alt="" />
          })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow_icon}alt="" />
        </div>
    </div>
  )
}

export default Mywork