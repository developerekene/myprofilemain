import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from "../../../images/png/logo.png"
import { Route } from 'react-router-dom';

const pages = ['Home', 'About Me', 'Courses', 'Branches' ,'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ height: 70, backgroundColor: "#191970"}}>
        <Toolbar sx={{display: "flex",}}>
          <Typography
            // variant="h6"
            // noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="logo" style={{width: 50, height: 50}}/>
          </Typography>

          <Box sx={{ display: "flex", gap: 5}}>
            <a style={{color: 'white', textDecoration: "none"}} href='/about'>About Me</a>
            <a style={{color: 'white', textDecoration: "none"}} href='/courses'>Training</a>
            <a style={{color: 'white', textDecoration: "none"}} href='/branches'>Mentorships</a>
            <a style={{color: 'white', textDecoration: "none"}} href='/portfolio'>Portfolio</a>
            <a style={{color: 'white', textDecoration: "none"}} href='/contact'>Contact</a>
          </Box>

          <Box>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;