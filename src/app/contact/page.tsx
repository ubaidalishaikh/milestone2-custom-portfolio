import React from "react"
import "../../app/styles/Contact.css"

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact(){
    return(
        <section className="contact-section">
          <h1 className="contact-h1">CONTACT</h1>
        <div className="container">
          <div className="heading">
            <h1>Contact Us</h1>
            <p>Feel free to get in touch with us for any inquiries or feedback.</p>
          </div>
          <div className="form-container">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"  placeholder="Your Message"></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="submit-button">Send Message</button>
              </div>
            </form>
            <div className="contact-info">
              <p>Email: <a href="mailto:example@email.com">banubaid123@gmail.com</a></p>
              <p>Address: Sawai Road Shahdadpur , Sindh , Pakistan</p>
              <div className="social-links">
                <a href="https://www.facebook.com/share/19ppipQP43/?mibextid=wwXIfr" className="social-icon"><FaFacebook /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="https://www.instagram.com/ig_ubaid_ali/profilecard/?igsh=OTYxb3RrN3piY3cy" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
    
}