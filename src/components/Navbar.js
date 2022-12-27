import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Stack,
    Button,
} from '@mui/material';

function Navbar() {
    const navigate = useNavigate();

    return (
        <Stack direction="row" spacing={2}>
            <Button
            color= "inherit"
            onClick={()=> navigate("/cine-flix")}
            >
            Home
            </Button>
            <Button
            color= "inherit"
            onClick={()=> navigate("/favorites")}
            >
            Favorites
            </Button>
            <Button
            color= "inherit"
            onClick={()=> navigate("/profile")}
            >
            Profile
            </Button>
        </Stack>
    )
}

export default Navbar;

