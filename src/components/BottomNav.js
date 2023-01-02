import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Stack,
    Hidden,
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material';
import { Home, Movie, Person } from '@mui/icons-material';

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
                <BottomNavigationAction
                    onClick={()=> navigate("/cine-flix")}
                    label="Home"
                    sx={{ color: "#fff" }}
                    icon={<Home color="error" />}
                />
                <BottomNavigationAction
                    onClick={()=> navigate("/watchlist")}
                    label="Watchlist"
                    sx={{ color: "#fff" }}
                    icon={<Movie color="error" />}
                />
                <BottomNavigationAction
                    onClick={()=> navigate("/profile")}
                    label="Profile"
                    sx={{ color: "#fff" }}
                    icon={<Person color="error" />}
                />
            </BottomNavigation>
        </Stack>
        </Hidden>
    )
}

export default Navbar;