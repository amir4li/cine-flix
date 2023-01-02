import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';

function Profile() {
    const isAuth = Boolean(useSelector((state)=> state.auth.token));
    console.log("isAuth---", isAuth)

    return (

        
        <>
        {isAuth
        ? <div>
            Profile

        </div>
        : <Login page={"Login"} />
        }
            
        </>
    )
}

export default Profile;

