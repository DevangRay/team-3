import { ButtonGroup, Button } from '@mui/material';
import {useState, useEffect, useContext} from 'react';
import { AccessTokenContext } from '../../Contexts/accessTokenContext';
import CardTopArtist from './CardTopArtist';
import {Helmet} from 'react-helmet'

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
            console.log("data", data)
        })
    }, [artistToShow])

    console.log("top artists:", artists)

    return(
        <>
            <Helmet><title>Top Artists</title></Helmet>
            <h1>Your Top Artists!</h1>
            <ButtonGroup>
                {artistToShow==="long_term"?<Button disableElevation color="primary">All Time</Button>:<Button color="primary" variant="contained" onClick={() => {setArtistToShow("long_term")}}>All Time</Button>}
                {artistToShow==="medium_term"?<Button disableElevation color="primary">Last 6 Months</Button>:<Button color="primary" variant="contained"  onClick={() => {setArtistToShow("medium_term")}}>Last 6 Months</Button>}
                {artistToShow==="short_term"?<Button  disableElevation color="primary">Last Month</Button>:<Button  color="primary" variant="contained" onClick={() => {setArtistToShow("short_term")}}>Last Month</Button>}
            </ButtonGroup>

            {/* {artistToShow==="long_term"?<p>All Time</p>:artistToShow==="medium_term"?<p>Last Year</p>:<p>Last Month</p>} */}
            {artists.length > 0 && 
                artists.map((val, index) => {
                    return <>  <CardTopArtist object={val} index={index} key={index}/> </>
            })}
        </>
    );
}