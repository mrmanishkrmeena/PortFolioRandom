import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Faqcompo = () => {
  return (
    <div className="faqcomponent">
      <h1
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-easing="ease-in-sine"
      >Frequently Asked Questions</h1>
      <div data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-back"
      className="faqs">
        <p className="text">How Does This Website Function ?</p>
        <div className="arrow">
          <FaArrowRightLong />
        </div>
      </div>
      <div data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-back"
      className="faqs">
        <p className="text">Why Should i come on this page again ?</p>
        <div className="arrow">
          <FaArrowRightLong />
        </div>
      </div>
      <div data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-back" className="faqs">
        <p className="text">How many members are there in your compony ?</p>
        <div className="arrow">
          <FaArrowRightLong />
        </div>
      </div>
      <div data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-back" className="faqs">
        <p className="text">Can I join Your company ?</p>
        <div className="arrow">
          <FaArrowRightLong />
        </div>
      </div>
      <div data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-back" className="faqs">
        <p className="text">How Can be in connect With you in future ?</p>
        <div className="arrow">
          <FaArrowRightLong />
        </div>
      </div>
      <div data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-back" className="faqs">
        <p className="text">Is There any bond issue at joining time ?</p>
        <div className="arrow">
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default Faqcompo;
