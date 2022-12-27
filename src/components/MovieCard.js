import React from 'react';
import { Box, Card, CardMedia, CardActions, Button, Rating, Typography } from "@mui/material";

function MovieCard(props) {
    return (
        <Card
        sx={{
            width: "100%",
            bgcolor:"#000",
            cursor: 'pointer',
        }}
        >
        <CardMedia
            sx={{ height: "300px", bgcolor: "#000"  }}
            image={props.image}
            title={props.title}
        />
        <CardActions>
            <Typography>
                {props.movie.Rating}
            </Typography>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    )
}

export default MovieCard;

