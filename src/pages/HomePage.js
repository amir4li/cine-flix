import React, { useState, useCallback, useEffect } from 'react';
import {
    Button,
    Input,
    InputAdornment,
    Stack, TextField, Typography
} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import MovieList from '../components/MovieList';


function HomePage() {
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState(null);
    const [isError, setIsError] = useState(false);

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
        <Stack spacing={5}>
        <Stack
        sx={{
            alignItems: "center",
        }}
        >
            <Typography variant="h6" m={1}>
                    Your Movie Directory
            </Typography>
            <Stack width="70%" spacing={2} alignItems="center">
                <TextField
                    fullWidth
                    variant="outlined"
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

        <Stack sx={{ p: "1rem" }}>
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

