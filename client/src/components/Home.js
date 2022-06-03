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
    const [dataGotten, setDataGotten] = useState(false);

    useEffect(() => {
        // console.log("Home.js access token: ", accessToken);
     fetch("http://localhost:9000/user/home?token="+ accessToken)
     .then(res => res.json())
     .then(data => {
         console.log("home data:", data)
         setSongs(data)
         axios.post('http://localhost:9000/user/profile', {
            name: data.display_name,
            email: data.email
        })
        })
    }, [])

    return (
        <div>
            <Helmet><title>Home Page</title></Helmet>
            <h1>Welcome to the Homepage</h1>
            {songs?<p>Welcome, {songs.display_name}</p>:<p>Loading...</p>}
        </div>
    )
}