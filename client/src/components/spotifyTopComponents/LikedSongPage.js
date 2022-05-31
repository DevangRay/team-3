import { ButtonGroup, Button } from '@mui/material';
import {useState, useEffect} from 'react';

export default function LikedSongPage() {
    const [songToShow, setSongToShow] = useState("All Time");

    return(
        <>
            <h1>Liked Songs</h1>
            <ButtonGroup>
                <Button onClick={() => {setSongToShow("All Time")}}>All Time</Button>
                <Button onClick={() => {setSongToShow("Last Year")}}>Last Year</Button>
                <Button onClick={() => {setSongToShow("Last Month")}}>Last Month</Button>
            </ButtonGroup>

            {songToShow==="All Time"?<p>All Time</p>:songToShow==="Last Year"?<p>Last Year</p>:<p>Last Month</p>}
        </>
    );
}