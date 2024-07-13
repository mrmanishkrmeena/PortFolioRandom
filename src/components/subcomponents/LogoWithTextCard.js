import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const LogoWithTextCard = props => {
  return (
    <div className='Logocard'>
      <img src={props.logo} width={70} alt="logo"/>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        < a href={props.link}> <IoArrowForwardCircleOutline /></a>
    </div>
  )
}

export default LogoWithTextCard
