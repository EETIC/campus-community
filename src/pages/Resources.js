import React from "react";
import "./Resources.css";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

import python_logo from "../images/python_logo.png";
import circle_chevron_right from "../images/circle-chevron-right-solid.svg";

function Resources() {
  let py_desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phaselluslobortis hendrerit enim, at ornare est posuere vel. Aliquam velsemper mauris. Donec consectetur nec ex a tempus. Mauris eget dolornon orci varius fermentum. Phasellus ac felis turpis. Pellentesqueporttitor pharetra augue, mollis viverra dui. Praesent neque arcu,ultrices eu arcu at, facilisis convallis orci";

  let drop_down_right = (
    <img src={circle_chevron_right} alt="right" className="ddright" />
  );

  let ddright = document.querySelector(".ddright");

  let dropButton = document.querySelector(".ddbutton");
  let isRotated = false;

  if (ddright) {
    dropButton.addEventListener("click", function () {
      if (!isRotated) {
        ddright.classList.add("rotated");
      } else {
        ddright.classList.remove("rotated");
      }
      isRotated = !isRotated;
      console.log(isRotated);
    });
  }

  return (
    <div>
      <NavBar />
      <div className="block">
        <div className="logo">
          <img src={python_logo} alt="python-logo" />
        </div>
        <div className="content">
          <div className="title">Python</div>
          <div className="desc">{py_desc}</div>
          <div className="mats">
            <button type="button" className="ddbutton">
              View Materials {drop_down_right}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
