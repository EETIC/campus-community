import React from "react";
import "./main.css";
import logo from "../../images/2205_w046_n004_121a_p1_121 1.png";
import stars from "../../images/stars.png";
import arrow from "../../images/arrow.png";
import about1 from "../../images/campus-1.jpg";
import about2 from "../../images/about-2.jpg";
import skill1 from "../../images/skill-1.png";
import skill2 from "../../images/skill-2.png";
import skill3 from "../../images/skill-3.png";
import skill4 from "../../images/skill-4.png";
import skill5 from "../../images/skill-5.png";

import CustomizedAccordions from "./Accordian";
import { useNavigate } from "react-router-dom";

const Main = () => {

  const navigate = useNavigate()
  
  return (
    <div className="main">
      <div>
        <div className="section-1" id="home">
          <img className="pic-1" src={logo} alt="pic-1" />

          <div className="section-1-1">
            <h3>EETI Foundation</h3>

            <div className="section-1-container">
              <h1 className="Campus">
                Campus{" "}
                <span>
                  <img src={stars} alt="" />
                </span>
                <br /> Communities
              </h1>
              <div className="reg">
                <a href="/register">
                  <div className="reg-con">
                    <button>
                      Register Now
                      <img className="arrow" src={arrow} alt="" />
                    </button>
                  </div>
                </a>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="about" id="about">
          <div className="about-1">
            <h2>About EETI Foundation</h2>
            <div className="about-container about-cntnr1">
              <div className="about-description">
                <p>
                <b>EETI Foundation</b> is a group of youngsters who have ignited their minds to be future innovators,
                entrepreneurs and tech enthusiasts coming under one platform to share their knowledge and
                creativity to explore the wonders of technology. Working together achieves greater results than
                working individually. Our vision is to emerge as a centre of excellence by spreading knowledge onto
                a much wider group of audience helping them learn the most hyped technologies and skills, to help
                them build the next big thing. The most noble thing is that all the services provided are ultimately
                free of cost.
                </p>
              </div>
              <div className="img-about">
                <img src={about1} alt="" className="m-hide " />
              </div>
            </div>
          </div>

          <div className="about-2">
            <h2>What are campus communities?</h2>
            <div className="about-container">
              <div className="img-about">
                <img src={about2} alt="" className="m-hide" />
              </div>
              <div className="about-description">
                <p>
                  Campus communities is a programme encouraging a tech learning
                  culture on campuses so that students can grow their abilities
                  and further their careers. Campus communities will help
                  college students who don't think they're getting enough
                  exposure to technology or don't have the ideal environment to
                  study it.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="for-you" id="benefits">
          <h2>What's in it for you?</h2>
          <div className="you-container">
            <div className="skill">
              <h2 className="heading">
                Supportive environment{" "}
                <span>
                  <img className="skill-img" src={skill1} alt="" />
                </span>
              </h2>
              <p>
              Being part of a campus community can provide a sense of belonging
              and support, particularly for students who may be far away from home 
              or feel isolated.
              </p>
            </div>

            <div className="skill">
              <h2 className="heading">
                Diversity{" "}
                <span>
                  <img className="skill-img" src={skill2} alt="" />
                </span>
              </h2>
              <p>
              Campus communities often attract a diverse group of people, which can lead to
              exposure to different perspectives and ideas.
              </p>
            </div>

            <div className="skill">
              <h2 className="heading">
              Networking
                <span>
                  <img className="skill-img" src={skill3} alt="" />
                </span>
              </h2>
              <p>
              Campus communities offer numerous opportunities for students to
              connect with professors, alumni, and peers, which can be invaluable 
              for career development.
              </p>
            </div>

            <div className="skill">
              <h2 className="heading">
              Extracurricular
                <span>
                  <img className="skill-img" src={skill4} alt="" />
                </span>
              </h2>
              <p>Campus communities typically offer a wide range of extracurricular
                activities, which can help students develop skills, pursue interests, 
                and make friends.
              </p>
            </div>
            <div className="skill">
              <h2 className="heading">
              Sense of purpose
                <span>
                  <img className="skill-img" src={skill5} alt="" />
                </span>
              </h2>
              <p>Being part of a campus community can provide a sense of purpose and
                direction, particularly for students who may be unsure of their future goals.
              </p>
            </div>
          </div>
        </div>

        <div className="faq" id="faq">
          <h2>Frequently Asked Questions</h2>
          <CustomizedAccordions />
        </div>
      </div>
    </div>
  );
};

export default Main;
