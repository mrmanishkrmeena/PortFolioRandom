import React from "react";
import imge1 from "../assests/images/im300pluse.png";
import imge2 from "../assests/images/im100plus.png";

const Experienceimgs = () => {
  return (
    <div className="experience-comp">
      <div className="exper-part1">
        <img data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        src={imge1} alt="loading" className="img1" />
        <h1 data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        >25 Years Of Experience</h1>
        <img data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out" src={imge2} alt="loading" className="img2" />
      </div>
      <div className="exper-part2">
        <h1 data-aos="fade-left"
           data-aos-duration="1000"
           data-aos-easing="ease-in-sine">My Work Process</h1>
        <div data-aos="fade-left"
           data-aos-duration="1000"
           data-aos-easing="ease-in-sine" data-aos-delay="100" className="inner-points">
          <span>01</span>
          <div className="maintext">
            <h2>
            Search Strategy</h2> 
            <p>Nulla porttitor accumsan tincidunt. Pellentesque adipiscing.</p>
          </div>
        </div>
        <div data-aos="fade-left"
           data-aos-duration="1000"
           data-aos-easing="ease-in-sine" data-aos-delay="250" className="inner-points">
        <span>02</span>
          <div className="maintext">
            <h2>Data Collection</h2> 
            <p>Nulla porttitor accumsan tincidunt. Pellentesque adipiscing.</p>
          </div>
        </div>
        <div data-aos="fade-left"
           data-aos-duration="1000"
           data-aos-easing="ease-in-sine" data-aos-delay="400" className="inner-points">
        <span>03</span>
          <div className="maintext">
            <h2>Targeting</h2> 
            <p>Nulla porttitor accumsan tincidunt. Pellentesque adipiscing.</p>
          </div>
        </div>
        <div data-aos="fade-left"
           data-aos-duration="1000"
           data-aos-easing="ease-in-sine" data-aos-delay="550" className="inner-points">
        <span>04</span>
          <div className="maintext">
            <h2>
            Result</h2> 
            <p>Nulla porttitor accumsan tincidunt. Pellentesque adipiscing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experienceimgs;
