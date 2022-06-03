// import React from 'react'
import { AccessTokenContext } from '../Contexts/accessTokenContext';
import { useContext } from 'react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import {Helmet} from "react-helmet";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Login() {
    const theme = createTheme();
    const navigate = useNavigate();
    const { accessToken, setAccessToken } = useContext(AccessTokenContext);
        
    const onClick = (e) => {
        fetch("http://localhost:9000/auth").then(res => res.json())
        .then(data => {
            window.open(data.url)
        })
        // .then(window.close())
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
    <div className='login'>
            <div className="center">
            <Helmet>
              <title>Login</title>
            </Helmet>
            {/* <Grid container justify = "center" >
                <Box>
                <Button onClick={(e) => onClick(e)}>
                Log in to App
                </Button>
                </Box>
            </Grid> */}
            </div>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://helios-i.mashable.com/imagery/articles/04Xg9z0OpmENu16hFQ4XGcs/hero-image.fill.size_1248x702.v1652732411.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Typography variant="h1" style={{
                color:'white'
            }} >
                    This Is a filler!Ho
            </Typography>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4" >
              Spotify Chat
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <Typography variant="h5" >
                    Spotify Chat Uses Spotify Authorization!
                </Typography>
                <Typography variant="h5" >
                    Have a Spotify Account? 
                    Simply Click on the Button to Sign In!
                </Typography>
              <Button
                fullWidth
                variant="contained"
                style ={
                    {
                        backgroundColor: "rgb(130, 123, 208)"
                    }
                }
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => onClick(e)}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
        </div>
    )
}

export default Login;