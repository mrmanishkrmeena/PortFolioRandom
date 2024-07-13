import React from 'react'
import HeadOnRoute from '../components/HeadOnRoute'
import LogoWithTextCard from '../components/subcomponents/LogoWithTextCard'
import MHobbys from '../components/MHobbys'
import Footer from '../components/Footer'
const Hobby = () => {
  return (
    <div className="hobby-route">
      <HeadOnRoute routename="My Hobbies"/>
      <MHobbys/>
      <Footer/>
    </div>
  )
}

export default Hobby
