import { ButtonGroup, Button } from '@mui/material';
import {useState, useEffect, useContext} from 'react';
import { AccessTokenContext } from '../../Contexts/accessTokenContext';
import CardTopSongs from './CardTopSongs';
import {Helmet} from "react-helmet";


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
            <Helmet><title>Top Songs</title></Helmet>
            <h1>Your Top Songs!</h1>
            <h3>Hover over any song to see more information!</h3>
            <ButtonGroup>
                {songToShow==="long_term"?<Button disableElevation color="primary">All Time</Button>:<Button color="primary" variant="contained" onClick={() => {setSongToShow("long_term")}}>All Time</Button>}
                {songToShow==="medium_term"?<Button disableElevation color="primary">Last 6 Months</Button>:<Button color="primary" variant="contained"  onClick={() => {setSongToShow("medium_term")}}>Last 6 Months</Button>}
                {songToShow==="short_term"?<Button  disableElevation color="primary">Last Month</Button>:<Button color="primary" variant="contained" onClick={() => {setSongToShow("short_term")}}>Last Month</Button>}
            </ButtonGroup>

            {/* {songToShow==="long_term"?<p>All Time</p>:songToShow==="medium_term"?<p>Last Year</p>:<p>Last Month</p>}  */}
            
            {songs.length > 0 && 
                songs.map((val, index) => {
                    return <>  <CardTopSongs object={val} index={index} key={index}/> </>
            })}
        </>
    );
}