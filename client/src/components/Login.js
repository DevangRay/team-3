import React from 'react'
import { AccessTokenContext } from '../Contexts/accessTokenContext';
import { useContext } from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const { accessToken, setAccessToken } = useContext(AccessTokenContext);
    
    const onClick = (e) => {
        fetch("http://localhost:9000/auth").then(res => res.json())
        .then(data => {
            window.open(data.url)
        })
    }

    const path = window.location.href.split('/')[3]
    let code;
    console.log(accessToken); // <empty string>
    useEffect(()=> {
        if(path){
            code = path.split('=')[1]
            console.log("access token from Login:", accessToken);
            if (accessToken === "" || !accessToken) {
                fetch('http://localhost:9000/auth/callback?code='+code)
                .then(res => res.json())
                .then(data => {
                // console.log(data)
                if(data.token){
                    console.log("data", data)
                    console.log(data.token) //BQD5CNhGXxy7_cxt7MDkae0pPnk2Aj2CKm0Ix5TI4MvT9XYo7yD7rum4JR0pq-g0N8U-ftE9_8GNvoV8DwNT60d8Z9yVll_tsPokSRYtPSNnuA5RDpVQrjNlF3CCIsheS5HZuu-BPE_aMSx7yenon6ZpgZsvn1VeS8UyCC4AugfbTOQ
                    setAccessToken(data.token) //<empty string>
                    //console.log(data.token)
                    console.log("before I go:", accessToken);
                    navigate('/home')
                }
            }
           //setAccessToken(data.access_token)
           //setRefreshToken(data.refresh_token)    
        )
    }}}, [])

    return (
        <div>
            <button onClick={(e) => onClick(e)}>
                Log in to App
            </button>
        </div>
    )
}

export default Login;