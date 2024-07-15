import React from 'react'
import Faqcompo from '../components/Faqcompo'
import LogoWithTextCard from '../components/subcomponents/LogoWithTextCard'
import HeadOnRoute from '../components/HeadOnRoute'
import Testimonial from '../components/Testimonial'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const Faq = () => {
  return (
    <div>
      <HeadOnRoute routename="FAQ"/>
      <div className="intigretseo ">
      <h1 data-aos="zoom-in-down" data-aos-easing="ease-in-out" data-aos-duration="1000">Support Center</h1>
      <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
      Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard McClintock.
      </p>
      <div className="serialofcards">
        <LogoWithTextCard
          logo={require("../assests/icons/reportanabig.png")}
          heading="News & Updtes"
          text="Nulla porttitor accumsan
          tincidunt."        />
        <LogoWithTextCard
          logo={require("../assests/icons/handwithmoney.png")}
          heading="For Investors"
          text="Nulla porttitor accumsan
          tincidunt."        />
        <LogoWithTextCard
          logo={require("../assests/icons/speakerbig.png")}
          heading="For Startups"
          text="Nulla porttitor accumsan
          tincidunt."        />
        <LogoWithTextCard
          logo={require("../assests/icons/avatarwstar.png")}
          heading="For Customers"
          text="Nulla porttitor accumsan
tincidunt."
        />
      </div>
      </div>
      <Faqcompo/>
      <Testimonial/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default Faq
