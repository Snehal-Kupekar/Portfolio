import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Collapse,
  Button,
  Container,
  ThemeProvider,
  useMediaQuery,
  Box,
  Typography,
  Grid,
  Item,
} from "@mui/material";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ShareIcon from "@mui/icons-material/Share";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useTheme } from "@mui/material/styles";

import ResponsiveAppBar from "./small-comp/appbar";
import themes from "../styles/theme";

import proj1 from "../Image/cards/advice.png";
import proj2 from "../Image/cards/memories.png"
import proj3 from "../Image/cards/weather.png"

import styles from "../styles/card.module.css";
import { HelpCenterSharp } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Project() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedCardIndex(index === expandedCardIndex ? null : index);
  };

  const cards = [
    {
      title: "Advice App",
      image: proj1,
      shortdiscription: "An app which enabled users to view a random quote or advice with each page refresh or interaction.",
      technology: "React Js , Html , CSS",
      gitLink: "https://github.com/Snehal-Kupekar/advice-app-react" ,
      projectLink :"https://stellar-capybara-c02abb.netlify.app/",
    },
    {
      title: "Memories App",
      image: proj2,
      shortdiscription: "A platform to store your memories in the form of posts,allowing them to easily create, delete, and update their content.",
      technology: "React Js , Mongo db , Node js , ExpressJs , Redux ",
      gitLink: "https://github.com/Snehal-Kupekar/MemoryMedia-App" ,
      projectLink :"https://memory-media-app.vercel.app/",
    },
    {
      title: "Weather App",
      image: proj3,
      shortdiscription: "A real time weather forecasting application that provides accurate and up-to-date weatherinformation for every place",
      technology: "Express Js , Css , HTML , Javascript",
      gitLink: "https://github.com/Snehal-Kupekar/WeatherApp" ,
      projectLink :"https://weather-app-woad-three.vercel.app/",
    },
    
  ];

  return (
    <>
      <ThemeProvider theme={themes}>
        <Box
          sx={{
            // backgroundImage:
            //   "linear-gradient(to bottom left,#16141A,#16141A,#3B3E45)",
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
          <Box sx={{ width: "100%" }}>
            <Container maxWidth="lg">
              <Grid container justifyContent="center">
                {cards.map((card, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                    <Card
                      sx={{
                        maxWidth: 320,
                        marginTop: 5,
                        boxShadow:
                          "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                        marginLeft: "auto",
                        marginRight: "auto",
                        cursor:"pointer",
                        // border:"1px solid #a50034"
                      }}
                      className={styles["hover-translate"]}
                    >
                      <CardHeader
                        title={card.title}
                        className={{ title: styles.typeFont }}
                        sx={{ color: "#fff" , }}
                      />
                      <CardMedia
                        component="img"
                        height="170"
                        image={card.image}
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="#fff"
                          className={styles.typeFont}
                        >
                          {card.shortdiscription}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton 
                         aria-label="open project"
                         component="a"
                         href={card.projectLink}
                         target="_blank" // If you want to open the link in a new tab
                         rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
                        >
                          <OpenInNewIcon sx={{ color: "#fff" }} />
                        </IconButton>
                        <IconButton 
                        aria-label="open project"
                        component="a"
                        href={card.gitLink}
                        target="_blank" // If you want to open the link in a new tab
                        rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
                        >
                          <GitHubIcon sx={{ color: "#fff" }} />
                        </IconButton>
                        <ExpandMore
                          expand={expandedCardIndex}
                          onClick={() => handleExpandClick(index)}
                          aria-expanded={index === expandedCardIndex}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon sx={{ color: "#fff" }} />
                        </ExpandMore>
                      </CardActions>
                      <Collapse
                        in={index === expandedCardIndex}
                        timeout="auto"
                        unmountOnExit
                      >
                        <CardContent>
                         
                          <Box className={styles.cardContent}>
                          {card.technology.split(",").map((tech, techIndex) => (
                            <Box
                              sx={{
                                
                              }}
                              className={styles.cardTag}
                              key={techIndex}
                            >
                              <Typography sx={{fontSize:13}}>
                              {`${tech.trim()}`}
                              </Typography>
                            </Box>
                          ))}
                          </Box>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
