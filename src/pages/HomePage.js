import React, { useState, useEffect } from 'react';
import {
    InputAdornment,
    Stack, TextField, Typography
} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';


function HomePage() {
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState(null);
    const [isError, setIsError] = useState(false);

    const darkBg = movies
    const handleChange = (e)=> {
        setSearchValue(e.target.value);       
    };

    useEffect(()=> {
        let timer = setTimeout( async ()=> {
            try {
                const response = await fetch(`https://www.omdbapi.com/?apikey=6541fa95&s=${searchValue}`, {
                method: "GET"
                });
                const data = await response.json();
                setMovies(data.Search)
            } catch (error) {
                setIsError(true)
            }           
        }, 400);

        return ()=> clearTimeout(timer);
    },[searchValue])

    return (
        <Stack
            p={2} pt={4}
            mt={6}
            gap={3}
            sx={{
                background: movies && "#111"
            }}
        >
        <Stack
        sx={{
            alignItems: "center",
            mt: "1rem"
        }}
        >
            <Typography variant="h6" m={1}>
                    Search your favorite movies here
            </Typography>
            <Stack width="70%" alignItems="center" >
                <TextField
                    fullWidth
                    placeholder="Search..."
                    size="small"
                    sx={{
                        backgroundColor: "#fff",
                        borderRadius: "5px"
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <SearchOutlined />
                        </InputAdornment>
                    }}
                    onChange={(e)=> handleChange(e)}
                />
            </Stack>
        </Stack>

        <Stack>
            {movies && (
            <MovieList movies={movies} isError={isError} />
            )}
            {(isError) && (
                <Typography m="auto">
                    Sorry! Some internal problem occured.
                    
                </Typography>
            )}
        </Stack>
        </Stack>
    )
}

export default HomePage;

