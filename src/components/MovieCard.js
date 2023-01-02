import React from 'react';
import { Box, Card, CardMedia, CardActions, Button, Rating, Typography } from "@mui/material";

function MovieCard(props) {
    return (
        <Card
        sx={{
            width: "100%",
            bgcolor:"#000",
            cursor: 'pointer',
            my: "1rem"
        }}
        >
        <CardMedia
            sx={{ height: "300px", bgcolor: "#000"  }}
            image={props.image}
            title={props.title}
        />
        </Card>
    )
}

export default MovieCard;

