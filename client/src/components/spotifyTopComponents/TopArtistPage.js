import { ButtonGroup, Button } from '@mui/material';
import {useState, useEffect, useContext} from 'react';
import { AccessTokenContext } from '../../Contexts/accessTokenContext';

export default function TopArtistPage() {
    const { accessToken } = useContext(AccessTokenContext);
    const [artists, setArtists] = useState([])
    const [artistToShow, setArtistToShow] = useState("long_term");

    useEffect( () => {
        // console.log("TopArtistPage: ", accessToken)
        fetch("http://localhost:9000/user/top-artist?token=" + accessToken+"&timerange=" + artistToShow)
        .then(res => res.json())
        .then(data => {
            setArtists(data)
            // console.log("data", data)
        })
    }, [artistToShow])

    console.log("top artists:", artists)

    return(
        <>
            <h1>Your Top Artists!</h1>
            <ButtonGroup>
                <Button onClick={() => {setArtistToShow("long_term")}}>All Time</Button>
                <Button onClick={() => {setArtistToShow("medium_term")}}>Last Year</Button>
                <Button onClick={() => {setArtistToShow("short_term")}}>Last Month</Button>
            </ButtonGroup>

            {artistToShow==="long_term"?<p>All Time</p>:artistToShow==="medium_term"?<p>Last Year</p>:<p>Last Month</p>}
            {artists.length > 0 && 
                artists.map((val, key) => {
                    return <p key={key}>{val.name}</p>
            })}
        </>
    );
}