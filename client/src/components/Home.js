import React from 'react'
import { AccessTokenContext } from '../Contexts/accessTokenContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";

export default function Home() {
    const { accessToken } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])

    useEffect(() => {
        // console.log("Home.js access token: ", accessToken);
     fetch("http://localhost:9000/user/home?token="+ accessToken)
     .then(res => res.json())
     .then(data => setSongs(data.items))
    }, [])
   
    console.log(songs)
    return (
        <div>
            <Helmet><title>Home Page</title></Helmet>
            <h1>Welcome to the Homepage</h1>
            {songs.length > 0 && 
                songs.map((val, key) => {
                    return <p key={key}>{val.track.name} by {val.track.artists[0].name}</p>
            })
            }
        </div>
    )
}