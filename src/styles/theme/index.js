import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");


export const Colors = {
  body_bg: "#16141A",
  dark_grey: "#3B3E45",
  light_grey: "#5B697D",
  dim_grey: "#677D9C",
  dove_grey: "#7D94AF",
  primary: "#990720",
  pink: "#EB254C",
  baby_pink: "#FD4D71",

  white: "#FFFFFF",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      dark: Colors.body_bg,
      light: "#26272b",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor:  "#990720",
          color: "#fff",
          fontSize: "17px",
          fontWeight:"400",          
        //   fontFamily:"Poppins"
        },
        arrow:{
            color: "#990720" ,
        }
      },
    },
    
    MuiCard:{
      styleOverrides:{
        root:{
          background:"#232F34"
        }
      }
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          // backgroundColor:'#26272b'
        },
      },
    },
  },
});

export default theme;
