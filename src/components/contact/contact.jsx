import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
// import emailjs from 'emailjs-com'

const contact = () => {
//   const form = useRef();
// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs.sendForm('service_r0xpowy', 'template_gc6y3on', form.current, 'p_38-lpXndXThYO_b')
// };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className="container contact__container">
        <div className='contact__options'>
         <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>sanatsantra007@gmail.com</h5>
          <a href="mailto:sanatsantra007@gmail.com" target="_blank"> Send an Email</a>
         </article>

         <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91-9620848916</h5>
          <a href="https://web.whatsapp.com/send?phone=+919620848916" target="_blank"> Send a message</a>
         </article>
        </div>
        {/* END Of contact options */}

        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form>
         <input type='text' name='name' placeholder='your full name' required />
         <input type='email' name='email' placeholder='Your message' required/>
         <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary buttonChange'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact;