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
                <img src={img1}/>
                <img src={img2}/>
                </div>
                <div class="column">
                <img src={img3}/>
                <img src={img4}/>
            </div>
            
      </div>

      <div className=" part2"> 
          <h1>Get Your Business To The Top Of The Search Engines</h1>
          <p>Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elittortor eget felis porttitor volutpat.</p>
          <div className="wrapper">
            <a href="/" className='btnclass'>Know More!</a>
          
      </div></div>
    </div>
  )
}

export default KnowSomthing
