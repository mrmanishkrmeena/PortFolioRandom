import React from 'react'
import Servicescompo from '../components/Servicescompo'
import HeadOnRoute from '../components/HeadOnRoute'
import Faqcompo from '../components/Faqcompo'
import Testimonial from '../components/Testimonial'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import IntigretSeo from '../components/IntigretSeo'


const Services = () => {
  return (
    <>
    <HeadOnRoute routename="Services"/>
    <Servicescompo/>
    <IntigretSeo/>
    <Faqcompo/>
    <Testimonial/>
    <Blogs/>
    <Footer/>
      </>
    
  )
}

export default Services
