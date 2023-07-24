import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ResponsiveAppBar from "./small-comp/appbar";
import styles from "../styles/homepage.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Homepage = () => {
  const navigate = useNavigate();

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const THRESHOLD = 15;

  const project = () => {
    navigate("/Projects");
  };

  const resumeButtonHandle = () => {
    window.open("https://shorturl.at/bkzEX", "_blank");
  };

  const LinkedInBtn = () => {
    window.open("https://shorturl.at/quEN0", "_blank");
  };
  const githubBtn = () => {
    window.open("https://shorturl.at/qtzX7", "_blank");
  };

  const handleMailClick = () => {
    const email = "snehaldk1111@gmail.com"; // Replace with your email address
    const subject = "Contact Me"; // Replace with the desired subject line
    // const body = 'Body of the email'; // Replace with the desired email body

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, "_blank");
  };
  return (
    <div>
      <ResponsiveAppBar />
      <div className={styles.homepageWrapper}>
        <div className={styles.leftPart}>
          <div className={`${styles.toptext} ${styles.greyFont}` }>Welcome to my site</div>
          <div>
            <p className={`${styles.nametext} ${styles.greyFont}`}>I’m Snehal Kupekar</p>
            <p className={styles.role}>
              <b>
                <span>MERN Stack Developer</span>
              </b>
            </p>
            <p>
              As a final year CSE student at RAIT, I have honed my skills as a
              MERN developer, and have successfully created numerous projects
              utilizing this cutting-edge tech stack. Not only that, but I have
              also dabbled in game development using the powerful Unity engine,
              where I am primarily responsible for game art and design.
            </p>
          </div>
          <div>
            <button onClick={resumeButtonHandle}>
              <b>Resume</b>
              <img alt="" src="/vector.svg" />
            </button>
            <button onClick={project}>
              <b>See my projects</b>
            </button>
          </div>
          <div>
            <div className={styles.circle} onClick={githubBtn}>
              <GitHubIcon
                sx={{ fontSize: "35px", color: "#16141A" }}
              ></GitHubIcon>
            </div>
            <div
              className={styles.circle}
              style={{ left: "245px" }}
              onClick={LinkedInBtn}
            >
              <LinkedInIcon
                sx={{ fontSize: "35px", color: "#16141A" }}
              ></LinkedInIcon>
            </div>
            <div
              className={styles.circle}
              style={{ left: "315px" }}
              onClick={handleMailClick}
            >
              <MailOutlineIcon
                sx={{ fontSize: "35px", color: "#16141A" }}
              ></MailOutlineIcon>
            </div>
          </div>
        </div>
        <div className={styles.rightPart}>photo</div>
        {/* <img className={styles.waveIcon} alt="" src="/wave.svg" /> */}
      </div>
    </div>
  );
};

export default Homepage;
