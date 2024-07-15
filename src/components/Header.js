import React from 'react'
import img1 from '../assests/images/watchlogimg.png'
import img2 from '../assests/images/heroimsboy.png'
import SingleSocialm from './subcomponents/SingleSocialm'
// import Socialmedia from './SocialMedia/Socialmedia'
const Header = () => {
  return (
    <div className='hero-container'>
     <div  data-aos="zoom-in-up" className="herosec hrosec1">
      <div className="inrtext">
        <h1>Get Your Business To The Top Of The Search Engines</h1>
      </div>
     <div className="inrtext" ><p>Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat.</p></div>
     <div className="inrtext">
     <div class="wrapper">
  <a href="/" className='btnclass'>Know More !</a>
</div>
<img src={img1} width={450} alt="" />
      </div>
      </div>
     <div 
     className="herosec herosec2">
      <img data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="50"
     data-aos-offset="0"
     data-aos-duration="2500" src={img2} alt="" />
     </div>
<div className="Socialmedia">
  <div className="SingleSocialm"><SingleSocialm logo={require("../assests/icons/mailchimp.png")} text1="Mail Chimp" text2="Send Emails"/>
 
  </div>
  <div className="SingleSocialm"><SingleSocialm logo={require("../assests/icons/facebook.png")} text1="Facebook" text2="Chat Here"/>
 
 </div><div className="SingleSocialm"><SingleSocialm logo={require("../assests/icons/instagram.png")} text1="Instagram" text2="Chat Here"/>
 
 </div><div className="SingleSocialm"><SingleSocialm logo={require("../assests/icons/twitter.png")} text1="Twitter" text2="Tweet Here"/>
 
 </div> 
 
</div>
    </div>
  )
}

export default Header
