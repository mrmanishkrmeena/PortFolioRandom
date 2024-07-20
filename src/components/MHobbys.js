import React from 'react'
import LogoWithTextCard from './subcomponents/LogoWithTextCard'

const MHobbys = () => {
  return (<div className="mhobbys">
    <div className="intigretseo">
    <h1
    data-aos="zoom-in"
    data-aos-easing="ease-in-sine"
    >What I Used To Do For Fun ?</h1>

    <p 
    data-aos="zoom-in-up"
    // data-aos-delay="300"
    data-aos-duration="1000"
    data-aos-easing="ease-in-back"
    >
      Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It
      Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It
      Over 2000 Years Old. Richard McClintock, A Latin Professor At
      Hampden-Sydney College In Virginia, Looked Up One Of The More Latin
      Words, Consectetur, From A Lorem Ipsum Passage
    </p>
    <div
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-sine"
    className="serialofcards">
      <LogoWithTextCard
        logo={require("../assests/icons/cricket.jpeg")}
        heading="Playing Cricket"
        text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat."
      />
      <LogoWithTextCard
        logo={require("../assests/icons/travel.png")}
        heading="Traveling"
        text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat."
      />
       <LogoWithTextCard
        logo={require("../assests/icons/bookreadon.png")}
        heading="Reading Books"
        text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat."
      />
    </div>
  </div></div>
  )
}

export default MHobbys
