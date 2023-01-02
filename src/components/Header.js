import React,{ useState } from 'react';
import { AppBar, Hidden, Stack, Menu, MenuItem, Typography, Toolbar, Button, Grid } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';


function Header() {
  const user = useSelector((state)=> state.auth.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e)=> {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e)=> {
    setAnchorEl(null);
  };

    return (
      <AppBar sx={{ bgcolor: "#000" }}>
        <Toolbar>        
        <Grid container
          direction="row"
          justifyContent="space-between"
        >
          <Grid item sx={6} md={2}>
          <Typography 
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "red",

            }}
          >
            CINEFLIX
          </Typography>
          </Grid>   
          
          <Hidden mdDown>
          <Grid item md={8}>
            <Navbar />
          </Grid>            
          </Hidden>

          <Grid item sx={6} md={2}>           
            <Button
              sx={{ border: "1px solid red" }}
              color= "inherit"
              id= "login-menu"
              endIcon={ <KeyboardArrowDown color="inherit" /> }
              onClick={(e)=> handleClick(e)}
            >
              <Typography>
              {user.name}
              </Typography>             
            </Button>
            <Menu
              id="login-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={(e)=> handleClose(e)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              sx={{
                width: "250px",
                height: "75px",
              }}
            >
                <MenuItem>Log Out</MenuItem>
            </Menu>
            </Grid>
          
          </Grid>
        </Toolbar>
      </AppBar>
    )
}

export default Header;

