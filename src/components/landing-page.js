import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/landing-page.module.css";
import ResponsiveAppBar from "./small-comp/appbar";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const LandingPage = () => {
  const navigate = useNavigate();

  const project = () => {
    navigate("/Projects");
  };

  const resumeButtonHandle = () => {
    window.open("https://shorturl.at/bkzEX", "_blank");
  };

  const LinkedInBtn = () =>{
    window.open("https://shorturl.at/quEN0", "_blank");
  }
  const githubBtn = () =>{
    window.open("https://shorturl.at/qtzX7", "_blank");
  }

  const handleMailClick = () => {
    const email = 'snehaldk1111@gmail.com'; // Replace with your email address
    const subject = 'Contact Me'; // Replace with the desired subject line
    // const body = 'Body of the email'; // Replace with the desired email body

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, "_blank");
  };
  return (
    <div className={styles.landingPage}>
      <ResponsiveAppBar />
      <section className={styles.hometext}>
        <div
          className={styles.asAFinal}
        >{`As a final year CSE student at RAIT, I have honed my skills as a MERN developer, and have successfully created numerous projects utilizing this cutting-edge tech stack. Not only that, but I have also dabbled in game development using the powerful Unity engine, where I am primarily responsible for game art and design. `}</div>
        <div className={styles.imSnehalKupekarContainer}>
          <p className={styles.imSnehalKupekar}>I’m Snehal Kupekar</p>
          <p className={styles.mernStackDeveloper}>
            <b>
              <span>MERN Stack Developer</span>
              <span className={styles.span}>{` `}</span>
            </b>
          </p>
        </div>
        <div className={styles.welcomeToMy}>Welcome to my site</div>
      </section>
      <button className={styles.btnResume} onClick={resumeButtonHandle}>
        <div className={styles.btnResumeChild} />
        <b className={styles.resume}>Resume</b>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </button>
      <button className={styles.btnProject} onClick={project}>
        <div className={styles.btnProjectChild} />
        <b className={styles.seeMyProjects}>See my projects</b>
      </button>
      <div className={styles.circle} onClick={githubBtn}>
        <GitHubIcon sx={{ fontSize: "35px", color: "#16141A" }}></GitHubIcon>
      </div>
      <div className={styles.circle} style={{left:"245px"}} onClick={LinkedInBtn}>
        <LinkedInIcon sx={{ fontSize: "35px", color: "#16141A" }}></LinkedInIcon>
      </div>
      <div className={styles.circle} style={{left:"315px"}} onClick={handleMailClick}>
        <MailOutlineIcon sx={{ fontSize: "35px", color: "#16141A" }}></MailOutlineIcon>
      </div>
      <img className={styles.waveIcon} alt="" src="/wave.svg" />
      <img className={styles.selfImg} alt="" src="/homeImg.svg" />
    </div>
  );
};

export default LandingPage;
