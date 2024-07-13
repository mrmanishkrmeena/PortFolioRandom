import React from 'react'
import SingleBlog from './subcomponents/SingleBlog'
import img1 from "../assests/images/blog1.png"
import img2 from "../assests/images/blog2.png"
import img3 from "../assests/images/blog3.png"
import img4 from "../assests/images/blog4.png"
import img5 from "../assests/images/blog5.png"
import img6 from "../assests/images/blog6.png"

const Blogs = () => {
  return (
    <div className='blogs'>
        <h1>Read My Latest Blog Post</h1>
        <div className="blogs-main">
            <SingleBlog  className="blog" blogimage={img1} heading="Startup Marketing Solution For Owner" dateon="April 4, 2021" infor="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." link="/" />
            <SingleBlog className="blog" blogimage={img2} heading="Startup Marketing Solution For Owner" dateon="April 4, 2021" infor="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." link="/" />
            <SingleBlog className="blog" blogimage={img3} heading="Startup Marketing Solution For Owner" dateon="April 4, 2021" infor="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." link="/" />
            <SingleBlog className="blog" blogimage={img4} heading="Startup Marketing Solution For Owner" dateon="April 4, 2021" infor="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." link="/" />
            <SingleBlog className="blog" blogimage={img5} heading="Startup Marketing Solution For Owner" dateon="April 4, 2021" infor="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." link="/" />
            <SingleBlog className="blog" blogimage={img6} heading="Startup Marketing Solution For Owner" dateon="April 4, 2021" infor="Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." link="/" />

        </div>
      
    </div>
  )
}

export default Blogs
