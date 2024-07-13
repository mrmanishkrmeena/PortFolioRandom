import React from 'react'
import LogoWithTextCard from './subcomponents/LogoWithTextCard'

const Services = () => {
  return (
    <div className='services'>
      <h1>What Services I Provide You</h1>
        <div className="services__container">
           <LogoWithTextCard logo={require("../assests/icons/searchbig.png")} heading="Search Strategy" text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat." link={"/"}/>
           <LogoWithTextCard logo={require("../assests/icons/speakerbig.png")} heading="Social Marketing" text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat." link={"/"}/>
           <LogoWithTextCard logo={require("../assests/icons/bussnessnotes.png")} heading="Business Planning" text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat." link={"/"}/>
           <LogoWithTextCard logo={require("../assests/icons/linkbig.png")} heading="Link Building" text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat." link={"/"}/>
           <LogoWithTextCard logo={require("../assests/icons/reportanabig.png")} heading="Report Analysis" text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat." link={"/"}/>
           <LogoWithTextCard logo={require("../assests/icons/cpamarbig.png")} heading="CPA Marketing" text="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat." link={"/"}/>

        </div>
    </div>
  )
}

export default Services
