// import React from 'react'
import { AccessTokenContext } from '../Contexts/accessTokenContext';
import { useContext } from 'react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import {Helmet} from "react-helmet";


function Login() {
    const navigate = useNavigate();
    const { accessToken, setAccessToken } = useContext(AccessTokenContext);
    
    const onClick = (e) => {
        fetch("http://localhost:9000/auth").then(res => res.json())
        .then(data => {
            window.open(data.url)
        })
        .then(window.close())
        .catch((err) => {console.log(err)})
    }

    const path = window.location.href.split('/')[3]
    let code;
    useEffect(()=> {
        if(path){ 

            code = path.split('=')[1] 
            if (accessToken === "" || !accessToken) {
                fetch('http://localhost:9000/auth/callback?code='+code)
                .then(res => res.json())
                .then(data => {

                    if(data.token){
                        setAccessToken(data.token);
                        navigate('/home')
                    }
                }
        )
        .catch((err) => {console.log(err)})
    }}}, [])

    return (
        <div>
            <Button onClick={(e) => onClick(e)}>
                Log in with Spotify
            </Button>

            <Helmet>
              <title>Login</title>
            </Helmet>
        </div>
    )
}

export default Login;