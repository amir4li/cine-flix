import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';

function WatchList() {
    const isAuth = Boolean(useSelector((state)=> state.auth.token));
    console.log("isAuth---", isAuth)
    return (
        <>
        {isAuth
        ? <div>WatchList</div> 
        : <Login page={"Watchlist"} />
        }
            
        </>
        
    )
}

export default WatchList;

