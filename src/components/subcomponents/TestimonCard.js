import React from 'react'
import SingleSocialm from './SingleSocialm'

const TestimonCard = (props) => {
  return (
    <div className='testimonialcard'>
      <div className="text">
     <p>{props.para}</p>
      </div>
      <div className="clientdetails">
        <SingleSocialm logo={props.imge} text1={props.name} text2={props.compony}/>
      </div>
    </div>
  )
}

export default TestimonCard
