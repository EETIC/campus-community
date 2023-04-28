import React, { useState, useEffect } from "react";
import "./Resources.css";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

function Resources() {
  const softResources = [
    {
      title: "Python",
      resources: [
        "https://youtu.be/_uQrJ0TkZlc",
        "https://www.youtube.com/playlist?list=PLS1QulWo1RIaJECMeUT4LFwJ-ghgoSH6n",
      ],
    },
    {
      title: "Machine Learning",
      resources: [
        "https://youtu.be/i_LwzRVP7bg",
        "https://youtube.com/playlist?list=PL9ooVrP1hQOHUfd-g8GUpKI3hHOwM_9Dn",
      ],
    },
    {
      title: "Blender",
      resources: [
        "https://youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD",
      ],
    },
    { title: "MATLAB", resources: ["https://youtu.be/T_ekAD7U-wU"] },
    { title: "Stock Market", resources: ["https://youtu.be/XDtWSmnDLEs"] },
    { title: "MS Excel", resources: [] },
  ];

  const hardResources = [
    {
      title: "Raspberry Pi",
      resources : [ "https://www.raspberrypi.org/documentation/",
       "https://www.youtube.com/watch?v=gpLzChnG1T8",]
    },
    {
      title: "Arduino",
      resources : [ "https://www.arduino.cc/",
      
        "https://www.youtube.com/playlist?list=PLliE3o7vC8rzZKcG-IPFz7s_4V0TzTf9X",]
    },
    {
      title: "Robotics",
      resources : [ "https://www.youtube.com/playlist?list=PLA2C19CC110C995AF",
      
        "https://www.robotshop.com/community/blog/show/top-5-robotics-websites-blogs",]
    },
    {
      title: "Embedded Systems",
      resources : [ "https://www.youtube.com/watch?v=BtrVGcFgMmw",
       "https://www.edx.org/learn/embedded-systems",]
    },
    {
      title: "PCB Design",
      
      resources : [  "https://www.youtube.com/playlist?list=PLy2022BX6EspFAK-F2doZRiL6H6E5xTmA",
       "https://www.altium.com/resources",]
    },
    {
      title: "3D Printing",
      
      resources : [  "https://www.youtube.com/playlist?list=PL8tYSbV_RTHwEokKfWG_yT8Tt_lZIvh1M",
       "https://www.instructables.com/classes/technology/3d-printing/",]
    },
  ];

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
          <p className="heading">Resources</p>
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
        {activeTab === "software" && (
          <div className="software">
            {softResources.map((resource, index) => (
              <div className="block" key={index} data-topic={resource.title}>
                <div className="content">
                  <div className="title">{resource.title}</div>
                  <ul>
                    {resource.resources.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link}
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
                    {resource.resources.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link}
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
      <Footer />
    </div>
  );
}

export default Resources;
