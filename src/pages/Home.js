import React from "react";
import Header from "../components/Header";
import KnowSomthing from "../components/KnowSomthing";
import Servicescompo from "../components/Servicescompo";
import Faqcompo from "../components/Faqcompo";
import Testimonial from "../components/Testimonial";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import MHobbys from "../components/MHobbys";

const Home = () => {
  return (
    <div>
      <Header/>
      <KnowSomthing/>
      
      <Servicescompo/>
      <Faqcompo/>
      <Testimonial/>
      <Blogs/>
      <MHobbys/>
      <Footer/>
    </div>
  );
};

export default Home;
