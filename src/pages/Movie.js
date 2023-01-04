import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Card, CardMedia, Typography, Chip, Box, Grid, useMediaQuery } from "@mui/material";
import { Star, Percent } from '@mui/icons-material';
import Footer from '../components/Footer';

function Movie() {
    const [movie, setMovie] = useState("");
    const [movieGenre, setMovieGenre] = useState([])
    const { movieId } = useParams();
    const isMobileScreen = Boolean(useMediaQuery("(max-width: 768px)"));
    const windowHeight = isMobileScreen ? "100%" : "100vh"

    const fetchMovie = async ()=> {
        const response = await fetch(`https://www.omdbapi.com/?apikey=6541fa95&i=${movieId}`)
        const data = await response.json();
        setMovie(data)

        // creating genre array
        const movieGenreArray = data.Genre.split(",")
        setMovieGenre(movieGenreArray)
    };

    useEffect(()=> {
        fetchMovie()
    } ,[])

    return (
        <Stack
            height= {windowHeight}
            bgcolor="#111"
            p={4}
            mt={6}
            gap={3}
        >

            {/* Heading */}
            <Grid container
                direction="row"
                rowSpacing={2}
            >
                <Grid item xs={12} md={10} pb={1}>
                <Stack gap={1}>
                    <Typography variant="h4">
                        {movie.Title}
                    </Typography>
                    <Stack direction="row" gap={2} fontSize="0.5rem">
                    <Typography variant="body2">
                        {movie.Year}
                    </Typography>
                    .
                    <Typography variant="body2">
                        {movie.Rated}
                    </Typography>
                    .
                    <Typography variant="body2">
                        {movie.Runtime}
                    </Typography>
                    </Stack>                   
                </Stack>
                </Grid>
                <Grid item xs={12} md={2}>
                <Stack direction="row" justifyContent="space-between">
                    <Stack>
                        <Typography variant="body2">
                            IMDb Rating
                        </Typography>
                        <Stack direction="row">
                            <Star sx={{ color: "yellow"}} />
                            <Typography variant="subtitle1">
                                {movie.imdbRating}/10
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography variant="body2">
                            Your Rating
                        </Typography>
                        <Stack direction="row">
                            <Star sx={{ color: "yellow"}} />
                            <Typography variant="subtitle1">
                                {0}/10
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                </Grid>
                
            </Grid>

            {/* Main body */}
            <Grid container
                rowSpacing={2}
                columnSpacing={4}
                pb={8}
            >
                <Grid item xs={12} md={3}>
                <Card
                    sx={{
                        cursor: 'pointer',                       
                    }}
                    >
                    <CardMedia
                        sx={{ height: "348px" }}
                        image={movie.Poster}
                        title={movie.Title}
                    />
                </Card>
                </Grid>
                <Grid xs={12} md={9} item>
                    <Stack>
                        <Stack
                            direction="row"
                            spacing={2}
                            mb={1}
                            sx={{ justifyContent: isMobileScreen ? "center" : "flex-start" }}
                        >
                        {movieGenre.map((gen, index)=> (
                            <Chip key={index} label={gen} sx={{color: "#fff",border: "2px solid red"}} />
                        ))}
                        </Stack>
                        <Box pb={2}>
                        <Typography>{movie.Plot}</Typography>
                        </Box>
                        <Box py={1} borderTop="1px solid #eee">
                            <Stack direction="row" gap={3}>
                            <Typography sx={{ color: "red" }} variant="h6">Director</Typography>
                            <Typography variant="h6">{movie.Director}</Typography>
                            </Stack>
                        </Box>
                        <Box py={1} borderTop="1px solid #eee">
                            <Stack direction="row" gap={3}>
                            <Typography sx={{ color: "red" }} variant="h6">Writer</Typography>
                            <Typography variant="h6">{movie.Writer}</Typography>
                            </Stack>
                        </Box>
                        <Box py={1} borderTop="1px solid #eee">
                            <Stack direction="row" gap={3}>
                            <Typography sx={{ color: "red" }} variant="h6">Actors</Typography>
                            <Typography variant="h6">{movie.Actors}</Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>   
            </Grid>
            {!isMobileScreen && <Footer />}
        </Stack>
    )
}

export default Movie;

