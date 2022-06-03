import React from 'react'
import { AccessTokenContext } from '../Contexts/accessTokenContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";
import axios from 'axios';

export default function Home() {
    const { accessToken } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])

    useEffect(() => {
        // console.log("Home.js access token: ", accessToken);
     fetch("http://localhost:9000/user/home?token="+ accessToken)
     .then(res => res.json())
     .then(data => setSongs(data))
    }, [])

    useEffect( () => {
        if(songs) {
            // axios.put('http://localhost:9000/user/profile' + songs.)
        }
    }, [])
   
    // console.log(songs) setSongs(data.items)
    return (
        <div>
            <Helmet><title>Home Page</title></Helmet>
            <h1>Welcome to the Homepage</h1>
            {songs?<p>Welcome, {songs.display_name}</p>:<p>Loading...</p>}
            {/* {songs.length > 0 && 
                songs.map((val, key) => {
                    return <p key={key}>{val.track.name} by {val.track.artists[0].name}</p>
            })
            } */}
        </div>
    )
}