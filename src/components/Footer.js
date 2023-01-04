import * as React from 'react';
import { Stack, Typography } from '@mui/material';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
        <Stack
            justifyContent="center"
            alignItems="Center"
            p={1}
            sx={{
                width: "98.7%",
                position: "fixed",
                bottom: 0,
                left:0,
                right: 0,
                backgroundColor: "#111",
                color: "#eee"
            }}
        >
        <Typography sx={{ color:"#FF0000"}} variant="body2">
            Cineflix &#169; {currentYear}
        </Typography>
      </Stack>
  );
}

export default Footer;

