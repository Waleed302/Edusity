import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3d97c97d-a8cc-4109-87c7-a6200f09c6da");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus ad,
          velit, a provident hic officia aliquam earum corporis vero ex exercitationem
          labore repellendus minima numquam? Ducimus distinctio expedita ad.
          labore repellendus minima numquam? Ducimus distinctio expedita ad.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Conatct@company.com</li>
          <li><img src={phone_icon} alt="" />+98-3774-467</li>
          <li> <img src={location_icon} alt="" />77 Maschusetts Avi, Cambridge <br />MA 03235 United State</li>
        </ul>
      </div>

      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" id="" placeholder='Enter Your Name'  required/>
          <label>Your Phone</label>
          <input type="tel" name="phone" id="" placeholder='Enter Your Phone No'  required/>
          <label>Write Your Message Here</label>
          <textarea name="message"  rows="6" placeholder='Message'></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact