import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';

function Profile() {
    const isAuth = Boolean(useSelector((state)=> state.auth.token));
    const user = useSelector((state)=> state.auth)
    console.log("isAuth---", isAuth)
    console.log(user)

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

