import React from 'react'
import './Footer.css'
import  user_icon from '../../assets/user_icon.svg'
import footer_logo from '../../assets/footer_logo.svg'
const Footer = () => {
    return (
        
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <img src={footer_logo} alt="" />
                        <p>Creative Frontend Developer skilled in HTML, CSS, JavaScript, and React.js, building responsive, user-friendly web interfaces with precision</p>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer-email-input">
                            <img src={user_icon}  alt="" />
                            <input type="email" placeholder='Enter your email' name="" id="" />
                        </div>
                        <div className="footer-subscribe">
                            Subscribe
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="footer-bottom">
                    <p className='footer-bottom-left'>@ 2025 . all right reserved</p>
                    <div className="footer-bottom-right">
                        <p>Term of services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me  </p>
                    </div>
                </div>
            </div>

    
    )
}

export default Footer