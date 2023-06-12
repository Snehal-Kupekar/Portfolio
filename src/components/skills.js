import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  ThemeProvider,
  useMediaQuery,
  Box,
  Paper,
  Typography,
  Grid,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ResponsiveAppBar from "./small-comp/appbar";
import themes from "../styles/theme";

import jsImg from "../Image/js.png";
import cssImg from "../Image/css.png";
import cppImg from "../Image/cpp.png";
import reactImg from "../Image/react.png";
import nodeImg from "../Image/node-js.png";
import mongoImg from "../Image/mongodb.png";
import htmlImg from "../Image/html.png";

import illustration from "../Image/skillimag.svg";
import styles from "../styles/AnimatedImage.module.css";

import SkillItem from "./small-comp/SkillItem";

export default function Skills() {
  const [isUp, setIsUp] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); // below md width ;

  const handleAnimation = () => {
    setIsUp(!isUp);
  };

  useEffect(() => {
    const interval = setInterval(handleAnimation, 3000); // Adjust the interval duration as needed
    return () => clearInterval(interval);
  }, []);


  const skills =[
    {
      title: "HTML",
      image: htmlImg,
      placement: "bottom",
    },
    {
      title: "CSS",
      image: cssImg,
      placement: "bottom",
    },
    {
      title: "JavaScript",
      image: jsImg,
      placement: "bottom",
    },
    {
      title: "Cpp",
      image: cppImg,
      placement: "top",
    },
    {
      title: "React",
      image: reactImg,
      placement: "bottom",
    },
    {
      title: "NodeJs",
      image: nodeImg,
      placement: "top",
    },
    {
      title: "MongoDb",
      image: mongoImg,
      placement: "top",
    },
    

  ];

  return (
    <>
      {/* {matches ? <h1>Mobile</h1> : <h1>Desktop</h1>} */}
      <ThemeProvider theme={themes}>
        <Box
          sx={{
            // backgroundImage:
            //   "linear-gradient(to left, #16141A, #16141A ,#3B3E45)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Box>
            <ResponsiveAppBar />
          </Box>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box paddingTop={5}>
                <Typography
                  sx={{
                    fontSize: "40px",
                    fontWeight: 600,
                    backgroundImage:
                      "linear-gradient(to left,  #FD4D71 ,#990720)",
                    color: "transparent",
                    backgroundClip: "text",
                    textAlign: "center",
                    marginTop: "50px",
                  }}
                  className={styles.textStyle}
                >
                  What I Know
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 3,
                      width: 90,
                      height: 90,
                    },
                  }}
                >
                  {skills.map((skill)=>(
                      <SkillItem
                        key={skill.title}
                        title={skill.title}
                        placement={skill.placement}
                        image={skill.image}
                        styles={styles}
                      />
                  ))}
                  
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                paddingTop={6}
                paddingLeft={10}
                className={styles["animated-image-container"]}
              >
                <div
                  className={`${styles.animation} ${isUp ? styles.up : ""}`}
                  onClick={handleAnimation}
                >
                  <img src={illustration} alt="Main Image" />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
