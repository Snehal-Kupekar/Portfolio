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
    <div className={styles.mainWrap}>
      <ResponsiveAppBar />
      <div className={styles.homepageWrapper}>
        <div className={styles.leftPart}>
          <div className={`${styles.toptext} ${styles.greyFont}`}>
            Welcome to my site
          </div>
          <div>
            <div className={`${styles.nametext} ${styles.greyFont}`}>
              I’m Snehal Kupekar
            </div>
            <p className={styles.role}>
              <b>
                <span>MERN Stack Developer</span>
              </b>
            </p>
            <p className={styles.greyFont}>
              As a recent graduate in Computer Science and Engineering from
              RAIT, I have honed my skills as a MERN developer and successfully
              completed numerous projects using this cutting-edge tech stack.
              Additionally, during my academic journey, I explored the exciting
              world of game development using the powerful Unity engine, where I
              primarily focused on game art and design.
            </p>
          </div>
          <div className={styles.buttons}>
            <button
              onClick={resumeButtonHandle}
              className={`${styles.btnRes} ${styles.homeBtn}`}
            >
              <b>Resume</b>
              <img alt="" src="/vector.svg" />
            </button>
            <button
              onClick={project}
              className={`${styles.btnProj} ${styles.homeBtn}`}
            >
              <b>See my projects</b>
            </button>
          </div>
          <div className={styles.bottomIcons}>
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
        <div className={styles.rightPart}>
          <div className={styles.imgStyle}>
            <img className={styles.selfImg} alt="" src="/homeImg.svg" />
          </div>
        </div>
        <img className={styles.waveImage} alt="" src="/wave.svg" />
      </div>
    </div>
  );
};

export default Homepage;
