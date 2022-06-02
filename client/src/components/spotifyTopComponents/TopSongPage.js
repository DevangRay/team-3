import { ButtonGroup, Button } from '@mui/material';
import {useState, useEffect, useContext} from 'react';
import { AccessTokenContext } from '../../Contexts/accessTokenContext';


export default function TopSongPage() {
    const { accessToken } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])
    const [songToShow, setSongToShow] = useState("long_term");

    useEffect( () => {
        // console.log("TopArtistPage: ", accessToken)
        fetch("http://localhost:9000/user/top-songs?token=" + accessToken+"&timerange=" + songToShow)
        .then(res => res.json())
        .then(data => {
            setSongs(data)
            // console.log("data", data)
        })
    }, [songToShow])

    return(
        <>
            <h1>Your Top Songs!</h1>
            <ButtonGroup>
                <Button onClick={() => {setSongToShow("long_term")}}>All Time</Button>
                <Button onClick={() => {setSongToShow("medium_term")}}>Last Year</Button>
                <Button onClick={() => {setSongToShow("short_term")}}>Last Month</Button>
            </ButtonGroup>

            {songToShow==="long_term"?<p>All Time</p>:songToShow==="medium_term"?<p>Last Year</p>:<p>Last Month</p>} 
            
            {songs.length > 0 && 
                songs.map((val, key) => {
                    return <p key={key}>{val.name}</p>
            })}
        </>
    );
}