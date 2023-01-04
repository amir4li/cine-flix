import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, useMediaQuery } from "@mui/material";

function MovieCard({ movie }) {
    const isNonMobileScreen = Boolean(useMediaQuery("(min-width: 768px)"));
    const navigate = useNavigate();
    return (
        <Card
            sx={{
                cursor: 'pointer',
                width: "90%"
            }}
        onClick={()=> navigate(`/movie/${movie.imdbID}`)}
        >
        <CardMedia
            sx={{ height: isNonMobileScreen ? "330px" : "200px" }}
            image={movie.Poster}
            title={movie.Title}
        />
        </Card>
    )
}

export default MovieCard;

