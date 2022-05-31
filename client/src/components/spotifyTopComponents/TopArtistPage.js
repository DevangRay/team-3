import { ButtonGroup, Button } from '@mui/material';
import {useState, useEffect} from 'react';

export default function TopArtistPage() {
    const [artistToShow, setArtistToShow] = useState("All Time");

    return(
        <>
            <h1>Your Top Artists!</h1>
            <ButtonGroup>
                <Button onClick={() => {setArtistToShow("All Time")}}>All Time</Button>
                <Button onClick={() => {setArtistToShow("Last Year")}}>Last Year</Button>
                <Button onClick={() => {setArtistToShow("Last Month")}}>Last Month</Button>
            </ButtonGroup>

            {artistToShow==="All Time"?<p>All Time</p>:artistToShow==="Last Year"?<p>Last Year</p>:<p>Last Month</p>}
        </>
    );
}