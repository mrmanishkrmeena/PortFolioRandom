import React from "react";
import { IoHomeOutline } from "react-icons/io5";
const HeadOnRoute = props => {
  return (
    <div className="headonro-compo">
      <h1 data-aos="zoom-in">{props.routename}</h1>
      <div className="gohome_btn">
        <a  href="/" className="buttonfx doubletake">
          <IoHomeOutline className="homeicon" /> Back To Home
        </a>
      </div>
    </div>
  );
};

export default HeadOnRoute;
