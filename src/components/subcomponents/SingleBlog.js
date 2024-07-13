import React from 'react'
import {  BiArrowFromLeft } from 'react-icons/bi'
import { MdOutlineWatchLater } from "react-icons/md";

const SingleBlog = (props) => {
  return (
    <div className='blog-box'>
      <div className="blog-img"> <img src={props.blogimage} alt=''/> </div>
      <div className="blog-content"> 
        <h2>{props.heading}</h2>
        <h3> <MdOutlineWatchLater  /> {props.dateon}</h3>
        <p>{props.infor}</p>
        <div class="wrapper">
  <a href={props.link} className='btnclass ' >Know More <BiArrowFromLeft/></a>
</div>
      </div>
    </div>
  )
}

export default SingleBlog
