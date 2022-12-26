import React from 'react';
import { Box, Card, CardMedia, CardActions, Button, Rating } from "@mui/material";

function MovieCard(props) {
    return (
        <Card
        sx={{
            width: "250px",
            bgcolor:"#000",
            cursor: 'pointer'
        }}
        >
        <CardMedia
            sx={{ height: "350px", bgcolor: "#000"  }}
            image={props.image}
            title={props.title}
        />
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    )
}

export default MovieCard;

