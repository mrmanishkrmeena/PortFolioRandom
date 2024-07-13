import React from 'react'

const SingleSocialm = props => {
  return (
    <div className='singlesocial-cont'>
      <div className="logo"><img src={props.logo} alt="logo" /></div>
      <div className="detail">
        <span className='text1'>{props.text1}</span>
        <span className='text2'>{props.text2}</span>
      </div>
    </div>
  )
}

export default SingleSocialm
