import { Grid } from '@mui/material';
import React from 'react'
import MovieCard from './MovieCard';

function MovieList({ movies }) {

    return (
        <Grid container
            columns={10}
            spacing={2}
            rowSpacing={4}
            justifyContent="space-around"
            alignItems="center"
            pt={2}
            pb={6}
        >
        {
        movies.map((movie, index)=> (
            <Grid item
            xs={5}
            md={2}
            key={index}
            >
            <MovieCard movie={movie} />
            </Grid>
        ))
        }
        </Grid>
    )
}

export default MovieList;

