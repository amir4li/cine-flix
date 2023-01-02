import { Grid } from '@mui/material';
import React from 'react'
import MovieCard from './MovieCard';

function MovieList({ movies }) {

    return (
        <Grid container>
        {
        movies.map((movie, index)=> (
            <Grid item
            key={index}
            mx="auto"
            my={.5}
            width="200px"
            >
            <MovieCard movie={movie} />
            </Grid>
        ))
        }
        </Grid>
    )
}

export default MovieList;

