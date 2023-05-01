import React, { useState, useEffect } from "react";
import "./Resources.css";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

function Resources() {
  const softResources = [
    {
      title: "Python",
      resources: [
        {head: "Programming with Mosh", link: "https://youtu.be/_uQrJ0TkZlc"},
        {head: "Python tutorial for beginners", link:"https://www.youtube.com/playlist?list=PLS1QulWo1RIaJECMeUT4LFwJ-ghgoSH6n"},
      ],
    },
    {
      title: "Machine Learning",
      resources: [
        {head:"Machine Learning for Everybody", link: "https://youtu.be/i_LwzRVP7bg"},
        {head:"Machine Learning Tutorial in Python | Edureka", link: "https://youtube.com/playlist?list=PL9ooVrP1hQOHUfd-g8GUpKI3hHOwM_9Dn"},
      ],
    },
    {
      title: "Blender",
      resources: [
        {head: "Blender Beginner Donut Tutoria", link: "https://youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"},
      ],
    },
    { title: "MATLAB", resources: [{head: "The Complete MATLAB Course", link: "https://youtu.be/T_ekAD7U-wU"}] },
    { title: "EV", resources: [{head:"NexLoop" ,link: "https://youtu.be/XDtWSmnDLEs"}] },
    { title: "Teachable Machine", resources: [{head: "teachable machine", link: "https://www.google.com/url?q=https://teachablemachine.withgoogle.com/train/image&hl=en-GB&sa=D&source=meet"}] },
    {title: "D Zone chat box", resources: [{head: "d zhone chat box", link: "https://www.google.com/url?q=http://chat.doncjohn.in/&hl=en-GB&sa=D&source=meet"}]},
    {title: "Code", resources: [{head: "jsdelivr", link: "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"}]},
    {title: "Tensorflow", resources: [{head: "Tensorflow user group", link: "https://www.meetup.com/tfug-thrissur/"}]},
    {title: "Stock market", resources: [{head: "Launching the FREE Stock Market Course India Needed", liink: "https://youtu.be/XDtWSmnDLEs"}]},
    {title: "MS Excel", resources: [{head: "Intellipaat", link: "https://youtu.be/27dxBp0EgCc"}]},
    {title: "DevOps", resources: [{head: "Intellipaat", link: "https://youtu.be/JHoy3lDZOfY"}]},
    {title: "Data Science", resources: [{head: "Intellipaat", link: "https://youtu.be/9l0DAYyJJhI"}]},
    {title: "javascript", resources: [{head: "Clever Programmer", link: "https://youtube.com/playlist?list=PL9ooVrP1hQOHUfd-g8GUpKI3hHOwM_9Dn"}]},
    {title: "Game programming", resources: [{head: "freecodecamp", link: "https://youtube.com/playlist?list=PLWKjhJtqVAbmqFs83T4W-FZQ9kK983tZC"}]},
    {title: "Java", resources: [{head: "Apns College", link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"}]},
    {title: "Web Development", resources: [{head: "Apna College", link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"}]},
    {title: "AI", resources: [{head: "Edureka", link: "https://youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_fwe9AabjZI1RjI"}]},
    {title: "Flutter", resources: [{head: "Net Ninja", link: "https://youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ"}]},
    {title: "React", resources: [{head: "Codevolution", link: "https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"}]},
    {title: "AR", resources: [{head: "freecodecamp", link: "https://youtu.be/WzfDo2Wpxks"}]},
    {title: ""}
  ];

  const hardResources = [
    {
      title: "Raspberry Pi",
      resources : [ {head: "Raspberry Pi documentation",link: "https://www.raspberrypi.org/documentation/"},
       {head: "head2", link:"https://www.youtube.com/watch?v=gpLzChnG1T8"},]
    },]
  //   {
  //     title: "Arduino",
  //     resources : [ "https://www.arduino.cc/",
      
  //       "https://www.youtube.com/playlist?list=PLliE3o7vC8rzZKcG-IPFz7s_4V0TzTf9X",]
  //   },
  //   {
  //     title: "Robotics",
  //     resources : [ "https://www.youtube.com/playlist?list=PLA2C19CC110C995AF",
      
  //       "https://www.robotshop.com/community/blog/show/top-5-robotics-websites-blogs",]
  //   },
  //   {
  //     title: "Embedded Systems",
  //     resources : [ "https://www.youtube.com/watch?v=BtrVGcFgMmw",
  //      "https://www.edx.org/learn/embedded-systems",]
  //   },
  //   {
  //     title: "PCB Design",
      
  //     resources : [  "https://www.youtube.com/playlist?list=PLy2022BX6EspFAK-F2doZRiL6H6E5xTmA",
  //      "https://www.altium.com/resources",]
  //   },
  //   {
  //     title: "3D Printing",
      
  //     resources : [  "https://www.youtube.com/playlist?list=PL8tYSbV_RTHwEokKfWG_yT8Tt_lZIvh1M",
  //      "https://www.instructables.com/classes/technology/3d-printing/",]
  //   },
  // ];

  const [activeTab, setActiveTab] = useState("software");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const soft = document.querySelector(".soft");
    const hard = document.querySelector(".hard");

    if (soft) {
      soft.addEventListener("click", () => handleTabClick("software"));
    }

    if (hard) {
      hard.addEventListener("click", () => handleTabClick("hardware"));
    }

    return () => {
      if (soft) {
        soft.removeEventListener("click", () => handleTabClick("software"));
      }

      if (hard) {
        hard.removeEventListener("click", () => handleTabClick("hardware"));
      }
    };
  }, []);

  useEffect(() => {
    const searchBar = document.getElementById("search-bar");
    if (searchBar) {
      searchBar.addEventListener("input", function () {
        const searchString = searchBar.value.toLowerCase();
        const resources = document.querySelectorAll(".block");

        if (resources) {
          resources.forEach((resource) => {
            const topic = resource.dataset.topic.toLowerCase();
            if (topic.includes(searchString)) {
              resource.style.display = "block";
            } else {
              resource.style.display = "none";
            }
          });
        }
      });
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div className="resources">
        <div className="top">
          <h2 className="heading">Resources</h2>
          <input
            type="text"
            placeholder="Search topics"
            id="search-bar"
          ></input>
        </div>
        <div className="buttons">
          <button
            className={`soft Button`}
            id={`${activeTab === "software" ? "active" : ""}`}
          >
            Software
          </button>
          <button
            className={`hard Button`}
            id={`${activeTab === "hardware" ? "active" : ""}`}
          >
            Hardware
          </button>
        </div>
        <div className="Both">
          {activeTab === "software" && (
            <div className="software">
              {softResources.map((resource, index) => (
                <div className="block" key={index} data-topic={resource.title}>
                  <div className="content">
                    <div className="title">{resource.title}</div>
                    <ul className="link">
                      {resource.resources.map((links, index) => (
                        <li key={index}>
                          "{links.head}: "
                          <a
                            href={links.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {links.link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "hardware" && (
            <div className="hardware">
              {hardResources.map((resource, index) => (
                <div className="block" key={index} data-topic={resource.title}>
                  <div className="content">
                    <div className="title">{resource.title}</div>
                    <ul>
                      {resource.resources.map((links, index) => (
                        <li key={index}>
                          "{links.head}: "
                          <a
                            href={links.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {links.link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
