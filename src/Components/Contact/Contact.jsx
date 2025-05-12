import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dd6c0be1-8beb-4dec-ad98-67d1b83cd230");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Email send Successfully")
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (

    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'am currently avaliable to take on new peoject, so feel free to send me a message.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>yogeshaher4055@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>+7559291521</p>
            </div><div className="contact-detail">
              <img src={location_icon} alt="" /><p>Pimpri,Pune</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name="name" id="" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your name' name="email" id="" />
          <label htmlFor="">Write Your Message here</label>
          <textarea name="message" placeholder='Enter your message' rows='8' id=""></textarea>
          <button className='contact-submit'>Submit Now </button>
        </form>
      </div>
    </div>
  )
}

export default Contact