import React from 'react'
import img1 from "../assests/images/writing.png"
import img2 from "../assests/images/im300pluse.png"
import img3 from "../assests/images/im100plus.png"
import img4 from "../assests/images/computertype.png"

const KnowSomthing = () => {
  return (
    <div className='somthing-container'>
     
            <div class="row">
                <div class="column">
                <img data-aos="fade-down"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1500" src={img1}/>
                <img data-aos="fade-right"
   data-aos-easing="ease-in-sine"
    
     data-aos-duration="1500" src={img2}/>
                </div>
                <div class="column">
                <img data-aos="fade-left"
     
     data-aos-easing="ease-in-sine"
     data-aos-duration="1500" src={img3}/>
                <img data-aos="fade-up"
    data-aos-duration="1500" src={img4}/>
            </div>
            
      </div>

      <div className=" part2"> 
          <h1 data-aos="zoom-in-left" 
          data-aos-easing="ease-in-sine"
         
          data-aos-duration="2000"
          >Get Your Business To The Top Of The Search Engines</h1>
          <p 
          data-aos="zoom-in-left" 
          data-aos-easing="ease-in-sine"
         data-aos-delay="300"
          data-aos-duration="2000"
          >Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat.</p>
          <div
          data-aos="zoom-in-left" 
          data-aos-easing="ease-in-sine"
         data-aos-delay="600"
          data-aos-duration="1500" className="wrapper">
            <a href="/" className='btnclass'>Know More!</a>
          
      </div></div>
    </div>
  )
}

export default KnowSomthing
