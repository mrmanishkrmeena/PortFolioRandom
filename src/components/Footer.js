import React from "react";
import {  BsTwitterX } from "react-icons/bs";

import {  FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="signupnewsletter">
        <h1
        data-aos="zoom-in"
        data-aos-duration="1000"

        data-aos-easing="ease-in-sine"
        >Sing Up To Newsletter</h1>
        <h3  data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine">
         
          Receice Latest News, Updates, And Many Other Things Every Week.{" "}
        </h3>
        <div data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="1000"
         className="inputbox">
          <input type="email" placeholder="Enter Your Email" width={150} />
          <div class="wrapper">
            <a href="/" className="btnclass">
              subscribe
            </a>
          </div>
        </div>
      </div>
      <div className="mainfooter">
        <div className="footerlinks">
            <ul>
                <li><h1>SEO Xpert</h1></li>
                <li><p>Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text.</p></li>
            </ul>
            <ul>
                <h2>Important Links</h2>
                <li><a href="">Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul>
            <h2>Featured Service</h2>

                <li><a href="">Search Strategy</a></li>
                <li><a href="">Social Marketing</a></li>
                <li><a href="">Business Planning</a></li>
                <li><a href="">Link Building</a></li>
                <li><a href="">Report Analysis</a></li>
                <li><a href="">CPA Marketing</a></li>
            </ul>
            <ul>
            <h2>Contact Me</h2>

                <li>Address : 15 Division Street, New York, NY 12032, United States Of America</li>
                <li>Phone : +0 (123) 456789</li>
                <li><a href="mailto:Ryunosuke07@gmail.com">Email:Ryunosuke07@gmail.com</a></li>
                <li>Fax : +8 (123) 456 789</li>
              
            </ul>
        </div>
        <hr/>

        <div className="footerbottom">
            
            <div className="footerbottomright">
                <ul>
                    <li><a href="">Terms Of Use</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Sitemap</a></li>
                </ul>
            </div>
            <div className="socialicons">
                <a href="/"><FaFacebookF/></a>
                <a href="/"><BsTwitterX/></a>
                <a href="/"><TfiLinkedin /></a>
                <a href="/"><FiInstagram /></a>
            </div>
<div className="footerbottomleft">
                <p>© 2021 SEO Expert. All Rights Reserved.</p>
            </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
