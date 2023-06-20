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
  Item
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

import img from "../Image/cards/card1.jpg";

import styles from "../styles/card.module.css";


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
    setExpandedCardIndex(index===expandedCardIndex ? null : index);
  };

  const cards = [
    {
      title: "Advice App",
      image: img,
      shortdiscription: "This is advice app",
      technology: "React Js , Mongo db , Netlify",
    },
    {
      title: "Memories App",
      image: img,
      shortdiscription: "This is advice app",
      technology: "React Js , Mongo db , Netlify",
    },
    {
      title: "Weather App",
      image: img,
      shortdiscription: "This is advice app",
      technology: "React Js , Mongo db , Netlify",
    },
    {
      title: "Weather App",
      image: img,
      shortdiscription: "This is advice app",
      technology: "React Js , Mongo db , Netlify",
    },
    {
      title: "Weather App",
      image: img,
      shortdiscription: "This is advice app",
      technology: "React Js , Mongo db , Netlify",
    },
    {
      title: "Weather App",
      image: img,
      shortdiscription: "This is advice app",
      technology: "React Js , Mongo db , Netlify",
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
            <Grid
              container
              spacing={2}
              className={styles["card-size"]}
            >

              {cards.map((card, index) => (
                
                  <Grid item xs={12} sm={6} md={3}  key={index}>
                    {/* <Typography variant="h1">GRdid</Typography> */}
                  <Card sx={{
                      maxWidth: 300 ,
                      marginTop:10 ,
                      boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                      marginLeft:"auto",
                      marginRight:"auto",
                      // border:"1px solid #a50034"
                      }}
                      className={styles["hover-translate"]}
                      >
                    <CardHeader
                      title={card.title}
                      className={{title:styles.typeFont}}
                      sx={{color:"#fff"}}
                    />
                    <CardMedia
                      component="img"
                      height="170"
                      image={card.image}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="#fff" className={styles.typeFont}>
                          {card.shortdiscription}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="open project">
                        <OpenInNewIcon sx={{color:"#fff"}}/>
                      </IconButton>
                      <IconButton aria-label="share">
                        <GitHubIcon sx={{color:"#fff"}}/>
                      </IconButton>
                      <ExpandMore
                        expand={expandedCardIndex}
                        onClick={()=>handleExpandClick(index)}
                        aria-expanded={index===expandedCardIndex}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon sx={{color:"#fff"}}/>
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={index===expandedCardIndex} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography variant="h5" className={styles.typeFont} sx={{color:""}}>Tech Stack:</Typography>
                       
                          {card.technology.split(',').map((tech,techIndex)=>(

                            <Typography key={techIndex} className={styles.typeFont} >
                              {`- ${tech.trim()}`}
                            </Typography>
                          ))}
                        
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
