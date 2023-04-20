import React from "react";
import "./Resources.css";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

import python_logo from "../images/python_logo.png";
import circle_chevron_right from "../images/circle-chevron-right-solid.svg";
import circle_chevron_down from "../images/circle-chevron-down-solid.svg";

function Resources() {
  let py_desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phaselluslobortis hendrerit enim, at ornare est posuere vel. Aliquam velsemper mauris. Donec consectetur nec ex a tempus. Mauris eget dolornon orci varius fermentum. Phasellus ac felis turpis. Pellentesqueporttitor pharetra augue, mollis viverra dui. Praesent neque arcu,ultrices eu arcu at, facilisis convallis orci";

  let drop_down_right = (
    <img src={circle_chevron_right} alt="right" className="ddright" />
  );
  let drop_down_down = (
    <img src={circle_chevron_down} alt="down" className="dddown" />
  );

  let ddright = document.querySelector(".ddright");
  let dddown = document.querySelector(".dddown");

  function dropDown () {
    console.log("hello")
    if (ddright.style.display == "inline"){
      ddright.style.display = "none";
      dddown.style.display = "inline";
    }
    else{
      ddright.style.display = "inline";
      dddown.style.display = "none";
    }
  }

  return (
    <div>
      <NavBar />
      {/* <div>
            <h1>Resources</h1>
        </div> */}
      <div className="block">
        <div className="logo">
          <img src={python_logo} alt="python-logo" />
        </div>
        <div className="content">
          <div className="title">Python</div>
          <div className="desc">{py_desc}</div>
          <div className="mats">
            <button type = "button" onClick={dropDown} className="ddbutton">View Materials {drop_down_right} {drop_down_down}</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
