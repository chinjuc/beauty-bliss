import React from 'react';
import './Contact.css'; // CSS file for styles
import { FaWhatsapp, FaInstagram, FaEnvelope, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="container contact-container" id='contact'>
      <div className="contact-left" />
      <div className="contact-right">
        <div className="contact-title">Let's Connect</div>
        <div className="social-icons">
          <a className="icon" href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a className="icon" href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a className="icon" href="mailto:your@email.com">
            <FaEnvelope />
          </a>
          <a className="icon" href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
 <div className="contact-address">
          <h4>Contact Address</h4>
          <p>123, kanyakumari,Tamil Nadu<br />City, State - 629203<br /></p>
          <p>Phone: +91-12345-67890</p>
        </div>      </div>
    </div>
  );
};

export default ContactPage;
