import React from 'react'
import { AccessTokenContext } from '../Contexts/accessTokenContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
    
    const { accessToken } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])

    useEffect(() => {
        // console.log("Home.js access token: ", accessToken);
     fetch("http://localhost:9000/user?token="+ accessToken)
     .then(res => res.json())
     .then(data => setSongs(data.items))
    }, [])
   
    console.log(songs)
    return (
        <div>
            <h1>welcome</h1>
            {songs.length > 0 && 
                songs.map((val, key) => {
                    return <p>{val.track.name} by {val.track.artists[0].name}</p>
            })
            }
        </div>
    )
}