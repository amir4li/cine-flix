import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import { Typography } from '@mui/material';

function WatchList() {
    const isAuth = Boolean(useSelector((state)=> state.auth.token));
    const watchlist = useSelector((state)=> state.movie.watchlist);

    return (
        <>
        {!isAuth ? <Login page={"Watchlist"} /> :
        <div>
            <Typography pt={10} variant="h1" color="#eee"> Hello World </Typography>
        </div>
        }
            
        </>
        
    )
}

export default WatchList;

