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
    // {title: }
  ];

  const hardResources = [
    {
      title: "Raspberry Pi",
      resources : [ {head: "Paul McWhorter", link:"https://www.youtube.com/playlist?list=PLGs0VKk2DiYypuwUUM2wxzcI9BJHK4Bfh"},]
    },
    {
      title: "Arduino",
      resources : [ {head:"Arduino Lessons ",link: "https://www.youtube.com/playlist?list=PLGs0VKk2DiYx6CMdOQR_hmJ2NbB4mZQn-"},]
    },
    {
      title: "Beaglebone Black",
      resources : [ {head: "Beaglebone Black LESSONS", link: "https://www.youtube.com/playlist?list=PLGs0VKk2DiYyThNvj6VyDFmOnQ8ncXk8b"},]
    },
    {
      title: "NodeMcu",
      resources : [ {head: "SM training academy", link: "https://www.youtube.com/watch?v=PSo3m7euzo0&list=PL_zvrXFdKgZpCgI1ZgfbJUcuGTKLL8pMT"},]
    },
    {
      title: "Atmel AVR",
      resources : [ {head: "BuildYourCNC", link: "https://www.youtube.com/playlist?list=PLE72E4CFE73BD1DE1"},
      {head: "humanHardDrive", link: "https://www.youtube.com/playlist?list=PLA6BB228B08B03EDD"}
    ]
    },
    {
      title: "ARM Architecture microcontrollers",
      resources : [ {head: "ARM Microcontroller Programming With the TI Stellaris/Tiva-C Board(s)", link: "https://www.youtube.com/playlist?list=PLmfT_cdP5PYBWYvK_bCdGyBqQEiRzUPeq"},
      {head:"MSP430 ", link: "https://www.youtube.com/playlist?list=PLRqKd7sGGKMTB5egcnNuR_SJjMgzFntKj"}
    ]
    },
  ]
  //   
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
                          {links.head} : {" "} 
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
