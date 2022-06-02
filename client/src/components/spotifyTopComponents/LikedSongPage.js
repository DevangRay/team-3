import {useState, useEffect, useContext, useReducer} from 'react';
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

            {songs.length > 0 && 
                <div>
                    <CardLikedSongs array={songs}/>
                </div>
            }
        </>
    );
}