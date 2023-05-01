import React, { useState, useEffect } from "react";
import "./Resources.css";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

function Resources() {
  const softResources = [
    {
      title: "Python",
      resources: [
        { head: "Programming with Mosh", link: "https://youtu.be/_uQrJ0TkZlc" },
        {
          head: "ProgrammingKnowledge",
          link: "https://www.youtube.com/playlist?list=PLS1QulWo1RIaJECMeUT4LFwJ-ghgoSH6n",
        },
      ],
    },
    {
      title: "Machine Learning",
      resources: [
        {
          head: "freecodecamp",
          link: "https://youtu.be/i_LwzRVP7bg",
        },
        {
          head: "Edureka",
          link: "https://youtube.com/playlist?list=PL9ooVrP1hQOHUfd-g8GUpKI3hHOwM_9Dn",
        },
        {
          head: "Stanford University course",
          link: "https://www.youtube.com/playlist?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN",
        },
      ],
    },
    {
      title: "Blender",
      resources: [
        {
          head: "Blender Guru",
          link: "https://youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD",
        },
      ],
    },
    {
      title: "MATLAB",
      resources: [
        {
          head: "Joseph Delgadillo",
          link: "https://youtu.be/T_ekAD7U-wU",
        },
      ],
    },
    {
      title: "EV",
      resources: [{ head: "NexLoop", link: "https://youtu.be/XDtWSmnDLEs" }],
    },
    {
      title: "Teachable Machine",
      resources: [
        {
          head: "teachable machine",
          link: "https://www.google.com/url?q=https://teachablemachine.withgoogle.com/train/image&hl=en-GB&sa=D&source=meet",
        },
      ],
    },
    {
      title: "D Zone chat box",
      resources: [
        {
          head: "d zhone chat box",
          link: "https://www.google.com/url?q=http://chat.doncjohn.in/&hl=en-GB&sa=D&source=meet",
        },
      ],
    },
    {
      title: "Code",
      resources: [
        {
          head: "jsdelivr",
          link: "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js",
        },
      ],
    },
    {
      title: "Tensorflow",
      resources: [
        {
          head: "Tensorflow user group",
          link: "https://www.meetup.com/tfug-thrissur/",
        },
      ],
    },
    {
      title: "Stock market",
      resources: [
        {
          head: "marketfeed by ShariqueSamsudheen",
          liink: "https://youtu.be/XDtWSmnDLEs",
        },
      ],
    },
    {
      title: "MS Excel",
      resources: [
        { head: "Intellipaat", link: "https://youtu.be/27dxBp0EgCc" },
      ],
    },
    {
      title: "DevOps",
      resources: [
        { head: "Intellipaat", link: "https://youtu.be/JHoy3lDZOfY" },
      ],
    },
    {
      title: "Data Science",
      resources: [
        { head: "Intellipaat", link: "https://youtu.be/9l0DAYyJJhI" },
      ],
    },
    {
      title: "javascript",
      resources: [
        {
          head: "Clever Programmer",
          link: "https://youtube.com/playlist?list=PL9ooVrP1hQOHUfd-g8GUpKI3hHOwM_9Dn",
        },
        {
          head: "freecodecamp",
          link: "https://www.youtube.com/watch?v=PkZNo7MFNFg&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V",
        },
      ],
    },
    {
      title: "Game programming",
      resources: [
        {
          head: "freecodecamp",
          link: "https://youtube.com/playlist?list=PLWKjhJtqVAbmqFs83T4W-FZQ9kK983tZC",
        },
      ],
    },
    {
      title: "Java",
      resources: [
        {
          head: "Apns College",
          link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop",
        },
      ],
    },
    {
      title: "Web Development",
      resources: [
        {
          head: "Apna College",
          link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n",
        },
      ],
    },
    {
      title: "AI",
      resources: [
        {
          head: "Edureka",
          link: "https://youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_fwe9AabjZI1RjI",
        },
      ],
    },
    {
      title: "Flutter",
      resources: [
        {
          head: "Net Ninja",
          link: "https://youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
        },
      ],
    },
    {
      title: "React",
      resources: [
        {
          head: "Codevolution",
          link: "https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
        },
      ],
    },
    {
      title: "AR",
      resources: [
        { head: "freecodecamp", link: "https://youtu.be/WzfDo2Wpxks" },
      ],
    },
    {
      title: "OpenCV",
      resources: [
        {
          head: "Installation",
          link: "https://www.youtube.com/watch?v=CJXIjApHYVs&list=PLMoSUbG1Q_r_sc0x7ndCsqdIkL7dwrmNF",
        },
        {
          head: "ProgrammmingKnowledge",
          link: "https://www.youtube.com/playlist?list=PLS1QulWo1RIa7D1O6skqDQ-JZ1GGHKK-K",
        },
        {
          head: "Python tutorial",
          link: "https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html",
        },
        {
          head: "Project: Gesture Volume Control",
          link: "https://www.youtube.com/watch?v=9iEPzbG-xLE&list=PLMoSUbG1Q_r8jFS04rot-3NzidnV54Z2q",
        },
      ],
    },
    {
      title: "C",
      resources: [
        {
          head: "freecodecamp",
          link: "https://www.youtube.com/watch?v=KJgsSFOSQv0&list=PLWKjhJtqVAbmUE5IqyfGYEYjrZBYzaT4m",
        },
      ],
    },
    {
      title: "Deep Learning",
      resources: [
        {
          head: "freecodecamp",
          link: "https://www.youtube.com/watch?v=uuuzvOEC0zw&list=PLWKjhJtqVAbm5dir5TLEy2aZQMG7cHEZp&index=2",
        },
        {
          head: "Neural Network",
          link: "https://www.youtube.com/watch?v=aircAruvnKk",
        },
        {
          head: "Deep Learning basics with Python, TensorFlow and Keras",
          link: "https://www.youtube.com/playlist?list=PLQVvvaa0QuDfhTox0AjmQ6tvTgMBZBEXN",
        },
        {
          head: "TensorFlow - Python Deep Learning Neural Network API",
          link: "https://www.youtube.com/playlist?list=PLZbbT5o_s2xrwRnXk_yCPtnqqo4_u2YGL",
        },
        {
          head: "Neural Networks - The Nature of Code",
          link: "https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh",
        },
      ],
    },
    {
      title: "Data Analysis with Python",
      resources: [
        {
          head: "freecodecamp",
          link: "https://www.youtube.com/watch?v=EsDFiZPljYo&list=PLWKjhJtqVAblvI1i46ScbKV2jH1gdL7VQ",
        },
      ],
    },
    {
      title: "Unity",
      resources: [
        {
          head: "Official Youtube channel",
          link: "https://www.youtube.com/@unity/playlists",
        },
        {
          head: "freecodecamp",
          link: "https://www.youtube.com/watch?v=Sqb-Ue7wpsI&list=PLWKjhJtqVAbmh6kzCSUon-SoTaMvXnHMB",
        },
      ],
    },
    {
      title: "Fusion",
      resources: [
        {
          head: "Autodesk Fusion 360",
          link: "https://www.youtube.com/@AutodeskFusion360/playlists",
        },
      ],
    },
    {
      title: "Robotics Operating System",
      resources: [
        {
          head: "Installation and Setup",
          link: "https://www.youtube.com/watch?v=Qk4vLFhvfbI&list=PLLSegLrePWgIbIrA4iehUQ-impvIXdd9Q",
        },
        {
          head: "Justin Huang",
          link: "https://www.youtube.com/@JustinHuang101/videos",
        },
        {
          head: "Shawn C",
          link: "https://www.youtube.com/watch?v=ehtUb55Rmmg&list=PLk51HrKSBQ8-jTgD0qgRp1vmQeVSJ5SQC",
        },
      ],
    },
    {
      title: "Linux",
      resources: [
        {
          head: "Introduction",
          link: "https://www.youtube.com/playlist?list=PLJcaPjxegjBV4aJh4hw3p3yL3CxE2sFXL",
        },
      ],
    },
    {
      title: "Figma",
      resources: [
        {
          head: "Figma Official Youtube Channel",
          link: "https://www.youtube.com/watch?v=dXQ7IHkTiMM&list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4&index=2",
        },
        {
          head: "Flux Academy",
          link: "https://www.youtube.com/watch?v=HZuk6Wkx_Eg",
        },
      ],
    },
  ];

  const hardResources = [
    {
      title: "Raspberry Pi",
      resources: [
        {
          head: "Paul McWhorter",
          link: "https://www.youtube.com/playlist?list=PLGs0VKk2DiYypuwUUM2wxzcI9BJHK4Bfh",
        },
      ],
    },
    {
      title: "Arduino",
      resources: [
        {
          head: "Arduino Lessons ",
          link: "https://www.youtube.com/playlist?list=PLGs0VKk2DiYx6CMdOQR_hmJ2NbB4mZQn-",
        },
      ],
    },
    {
      title: "Beaglebone Black",
      resources: [
        {
          head: "Beaglebone Black LESSONS",
          link: "https://www.youtube.com/playlist?list=PLGs0VKk2DiYyThNvj6VyDFmOnQ8ncXk8b",
        },
      ],
    },
    {
      title: "NodeMcu",
      resources: [
        {
          head: "SM training academy",
          link: "https://www.youtube.com/watch?v=PSo3m7euzo0&list=PL_zvrXFdKgZpCgI1ZgfbJUcuGTKLL8pMT",
        },
      ],
    },
    {
      title: "Atmel AVR",
      resources: [
        {
          head: "BuildYourCNC",
          link: "https://www.youtube.com/playlist?list=PLE72E4CFE73BD1DE1",
        },
        {
          head: "humanHardDrive",
          link: "https://www.youtube.com/playlist?list=PLA6BB228B08B03EDD",
        },
      ],
    },
    {
      title: "ARM Architecture microcontrollers",
      resources: [
        {
          head: "ARM Microcontroller Programming With the TI Stellaris/Tiva-C Board(s)",
          link: "https://www.youtube.com/playlist?list=PLmfT_cdP5PYBWYvK_bCdGyBqQEiRzUPeq",
        },
        {
          head: "MSP430 ",
          link: "https://www.youtube.com/playlist?list=PLRqKd7sGGKMTB5egcnNuR_SJjMgzFntKj",
        },
      ],
    },
  ];
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
                          {links.head} :{" "}
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
                          {links.head} :{" "}
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
