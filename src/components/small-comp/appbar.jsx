import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { ThemeProvider } from '@mui/material';
import { Link, NavLink, useLocation} from 'react-router-dom';

import themes from '../../styles/theme'
import { useTheme } from "@mui/material/styles";

import styles from '../../styles/Appbar.module.css'

const pages = ['About', 'Skills', 'Projects'];



function ResponsiveAppBar() {
  const theme = useTheme();

  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  

  
  const resumeButtonHandle = () =>{
    window.open('https://shorturl.at/bkzEX', '_blank');
  }
  const location = useLocation();
  
  const isActiveClick = (path) =>{
    return location.pathname === path ? styles.active : '';
    console.log("location of appbar :",location.pathname);
  }
  return (
    <ThemeProvider theme={themes}>

    <AppBar position="static" style={{backgroundColor: '#16141A'}}>
  
        <Toolbar disableGutters>
          <Box sx={{paddingLeft:20 , display:"flex"}}>
          <CircleOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , mt:0.3}} />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              // paddingLeft:20,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins',
              fontWeight: 600,
              letterSpacing: '.4rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
         
          >
           SNEHAL
          </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                background: "#3B3E45"
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{fontFamily:'Poppins'}}>
                    <Link style={{textDecoration:"none" , color:"#7d94af"}} to={`/${page}`}>{page}</Link>
                  </Typography>

                </MenuItem>
              ))}
            <Button sx={{  
                color:"#990720",
                marginLeft:"9px",
                
                }}
                
                >
                Resume
            </Button>
            </Menu>
          </Box>
          <CircleOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1}} />
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 600,
              letterSpacing: '.4rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          >
            SNEHAL
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: 'flex-end', paddingRight:20}}>
            {pages.map((page) => (
              <Button
              key={page}
                sx={{ my:2,
                   mx:1.5,
                   display: 'block' ,
                   fontFamily:'Poppins',
                   fontSize:'15px',
                   textDecoration: 'none',
                  
                  }}
                 
              >
               <NavLink 
               to={`/${page}`}
               className={[styles.nav, isActiveClick(`/${page}`)].join(' ')}
                >{page}</NavLink>
              </Button>
            ))}
            <Button sx={{  
                color:"rgb(125, 148, 175)",
                border:"3px solid #990720" , 
                marginTop:2 , marginBottom:2 ,
                '&:hover':{ color:"#fff" , 
                background:"#990720"}
                }}
                
                onClick={resumeButtonHandle}

                >
                Resume
            </Button>
          </Box>
        </Toolbar>
      
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
