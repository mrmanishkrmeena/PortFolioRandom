import React from 'react'
import HeadOnRoute from '../components/HeadOnRoute'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <>
      <HeadOnRoute routename="Blogs Here"/>
      <Blogs/>
      {/* seaerch in blogs section here */} 
      <Footer/>
    </>
  )
}

export default Blog
