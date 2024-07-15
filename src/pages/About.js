import React from "react";
import HeadOnRoute from "../components/HeadOnRoute";
import Servicescompo from "../components/Servicescompo";
import Faqcompo from "../components/Faqcompo";
import Testimonial from "../components/Testimonial";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Experienceimgs from "../components/Experienceimgs";
import MHobbys from "../components/MHobbys";
import ContactForm from "../components/ContactForm";

const About = () => {
  return (
    <div className="aboutme">
      <HeadOnRoute routename="About Me"/>

<Experienceimgs/>

      <Servicescompo/>
      <Faqcompo/>
      <Testimonial/>
      <Blogs/>
      <MHobbys/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default About;
