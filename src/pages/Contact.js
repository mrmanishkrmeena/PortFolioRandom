import React from 'react';
import HeadOnRoute from '../components/HeadOnRoute';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <div className='contact-page'>
      <HeadOnRoute routename="Contact Us"/>

      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
