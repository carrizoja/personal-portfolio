import React from "react";
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {IoLogoWhatsapp} from 'react-icons/io5'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ysfcckr', 'template_cstuisk', form.current, 'aClNyqnAf2NwTDLOR')

    e.target.reset();
  };

  return (
    <section className="contactId" id="contact">
      <h5>Feel free to contact me!</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>carrizoja@gmail.com</h5>
            <a href="mailto:carrizoja@gmail.com" target='_blank' rel="noreferrer">Send me a email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Facebook Messenger</h4>
            <h5>José Carrizo</h5>
            <a href="https://m.me/carrizoja" target='_blank' rel="noreferrer">Send me a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+5491130284520</h5>
            <a href="https://wa.me/+5491130284520/?text=Hey!, José. How are you? I want to contact you." target='_blank' rel="noreferrer">Send me a message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required/>
          <input type="email" name="email" placeholder="Your email address" required/>
          <textarea name="message" rows="10" placeholder="Your message" required />
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>
      </div>    
    </section>
  );
};

export default Contact;
