import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia } from "@mui/material";

function MovieCard({ movie }) {
    const navigate = useNavigate();
    return (
        <Card
        sx={{
            width: "100%",
            bgcolor:"#000",
            cursor: 'pointer',
            my: "1rem"
        }}
        onClick={()=> navigate(`/movie/${movie.imdbID}`)}
        >
        <CardMedia
            sx={{ height: "300px", bgcolor: "#000"  }}
            image={movie.Poster}
            title={movie.Title}
        />
        </Card>
    )
}

export default MovieCard;

