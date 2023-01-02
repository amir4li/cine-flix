import { Box, useMediaQuery, Typography } from '@mui/material';
import React from 'react';
import UserForm from '../components/form/UserForm';

function Login({ page }) {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    return (
        <Box
            width= { isNonMobile ? "70%" : "100%" }
            m="auto"
            pt={1}
            textAlign="center"
            bgcolor="#eee"
            borderRadius={2}
        >
            <Typography
                fontSize="1.4rem"
                color="red"
                fontWeight="bold"
                
            >
            {page ? "Please log in to proceed" : "Wellcome to CINEFLIX" }
                
            </Typography>
            <UserForm pageType="login" />
        </Box>
    )
}

export default Login;

