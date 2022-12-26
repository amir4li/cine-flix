import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Stack,
    Hidden,
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material';
import { Home, Favorite, Person } from '@mui/icons-material';

function Navbar() {
    const navigate = useNavigate();

    return (
        <Hidden mdUp>
        <Stack direction="row" spacing={2}
            sx={{
                justifyContent: "center",
                width: "100%",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                border: "1px solid red",
                color: "#000"
            }}
        >
            <BottomNavigation
                showLabels
                sx={{
                justifyContent: "center",
                width: "100%",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#000"
                }}
            >
                <BottomNavigationAction label="Home" sx={{ color: "#fff" }} icon={<Home color="error" />}/>
                <BottomNavigationAction label="Favorites" sx={{ color: "#fff" }} icon={<Favorite color="error" />} />
                <BottomNavigationAction label="Profile" sx={{ color: "#fff" }} icon={<Person color="error" />} />
            </BottomNavigation>
        </Stack>
        </Hidden>
    )
}

export default Navbar;