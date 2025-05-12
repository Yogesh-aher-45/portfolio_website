import React, { useRef, useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline_icon from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import close_menu from '../../assets/menu_close.svg'
import menu_open from '../../assets/menu_open.svg'
const Navbar =()=>{
    const[menu,setmenu]=useState("home")
    const menuref = useRef();

    const openMenu =()=>{
      menuref.current.style.right='0'
    }
    const closeMenu =()=>{
      menuref.current.style.right='-400px'
    }
    return (
       <>  
           <div className="navbar">
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt="" />
            <ul ref={menuref} className="nav-menu">
                <img src={close_menu} onClick={closeMenu} className="nav-mob-close" alt="" />
                <li><AnchorLink  className="anchor-link"  href="#home" ><p onClick={()=>{setmenu("home")}}>Home </p></AnchorLink>{menu==="home"?<img src={underline_icon} alt=""/>:<></>}</li>
                <li><AnchorLink className="anchor-link"  offset="50" href="#about"><p onClick={()=>{setmenu("about")}}>About Me </p></AnchorLink>{menu==="about"?<img src={underline_icon} alt=""/>:<></>}</li>
                <li><AnchorLink  className="anchor-link" offset="50" href="#service"><p onClick={()=>{setmenu("service")}}>Services </p></AnchorLink>{menu==="service"?<img src={underline_icon} alt=""/>:<></>}</li>
                <li><AnchorLink className="anchor-link"  offset="50" href="#mywork"><p onClick={()=>{setmenu("my work")}}>My Work </p></AnchorLink>{menu==="my work"?<img src={underline_icon} alt=""/>:<></>}</li>
                <li><AnchorLink className="anchor-link"  offset="50" href="#contact"><p onClick={()=>{setmenu("contact")}}>Contact </p></AnchorLink>{menu==="contact"?<img src={underline_icon} alt=""/>:<></>}</li>
            </ul>
            <div className="nav-connect">
              <AnchorLink className="anchor-link"  offset="50" href="#contact">  Connect with me </AnchorLink>
            </div>
           </div>
       </> 
    )
}
export default Navbar