import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Hidden, Select, Box, Stack, Menu, MenuItem, Typography, Toolbar, Button, FormControl } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import Navbar from './Navbar';


function Header() {
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
        <Stack
          width="100%"
          direction="row"
          spacing={4}
          justifyContent="space-between"
        >       
          <Typography 
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "red",

            }}
          >
            CINEFLIX
          </Typography>

          <Hidden mdDown>
            <Stack sx={{ flexGrow: 1}}>
            <Navbar />
            </Stack>             
          </Hidden>

          <Stack sx={{ flexGrow: 1}}>           
            <Button
              sx={{ border: "1px solid red", position: "absolute", right: "1rem" }}
              color= "inherit"
              id= "login-menu"
              endIcon={ <KeyboardArrowDown color="inherit" /> }
              onClick={(e)=> handleClick(e)}
            >
            Amir Ali
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
                height: "75px"
              }}
            >
                <MenuItem>Log Out</MenuItem>
            </Menu>
            </Stack>
          
          </Stack>
        </Toolbar>
      </AppBar>
    )
}

export default Header;

