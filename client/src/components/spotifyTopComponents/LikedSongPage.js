import {useState, useEffect, useContext} from 'react';
import { AccessTokenContext } from '../../Contexts/accessTokenContext';
import CardLikedSongs from './CardLikedSongs';

export default function LikedSongPage() {
    const { accessToken } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])
    // const [songToShow, setSongToShow] = useState("long_term");

    useEffect( () => {
        // console.log("TopArtistPage: ", accessToken)
        fetch("http://localhost:9000/user/saved-songs?token=" + accessToken)
        .then(res => res.json())
        .then(data => {
            setSongs(data)
            console.log("data", data)
        })
    }, [])

    return(
        <>
            <h1>Liked Songs</h1>
            {/* <ButtonGroup>
                <Button onClick={() => {setSongToShow("long_term")}}>All Time</Button>
                <Button onClick={() => {setSongToShow("medium_term")}}>Last Year</Button>
                <Button onClick={() => {setSongToShow("short_term")}}>Last Month</Button>
            </ButtonGroup>

            {songToShow==="long_term"?<p>All Time</p>:songToShow==="medium_term"?<p>Last Year</p>:<p>Last Month</p>}  */}

            {songs.length > 0 && 
                songs.map((val, key) => {
                    return <div key={key}>
                        <CardLikedSongs title={val.track.name} band = {val.track.artists[0].name} album={val.track.album.name} link={val.track.external_urls.spotify} src={val.track.album.images[1]}/>
                        {/* <p key={key}>{val.track.name} by {val.track.artists[0].name}</p>
                        <a href={val.track.external_urls.spotify} target="_blank">Listen Here</a>
                        <img src={val.track.album.images[0]} alt="album cover art for saved song"/> */}
                    </div>
            })
            }
        </>
    );
}