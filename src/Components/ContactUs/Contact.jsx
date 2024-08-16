import React from 'react'
import './contact.css'
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
    
        formData.append("access_key", "5a622573-ff4f-40f2-9e75-de36786589b1");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
    };


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="Image" /></h3>
                <p>
                    Our mission is to provide innovative solutions that make a difference in the lives of our customers.
                    We are committed to excellence, creativity, and integrity in everything we do.
                </p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="Image" /> Contac@Test.dev
                    </li>
                    <li>
                        <img src={phone_icon} alt="Image" /> +91 5256548524
                    </li>
                    <li>
                        <img src={location_icon} alt="Image" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form action="" onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Your Name' required/>
                    <label htmlFor="">Your Phone</label>
                    <input type="number" name='phone' placeholder='Your Phone' required/>
                    <label htmlFor="">Your Message</label>
                    <textarea name="message" placeholder='Your Message' id="" cols="30" rows="10" required></textarea>
                    <button type="submit" className='btn dark-btn'>Send Message <img src={white_arrow} alt="Image" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact