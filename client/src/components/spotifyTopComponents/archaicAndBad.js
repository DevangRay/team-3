import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export default function CardTopSongs(props) {
    const index = props.index + 1;
    return (
        <div className='topSong'>
            <Card raised={true} className="songCard" >
                <CardActionArea href={props.object.external_urls.spotify} target="_blank">
                <CardMedia 
                    component = "img"
                    image = {props.object.album.images[0].url}
                    height="300px"
                />
               <CardContent className="topSongDescription" sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                    <br></br>
                    {index}. {props.object.name}
                    </Typography>
                    <br></br>
                    <Typography variant="h5" color = "text.secondary" sx={{ fontWeight: 'bold', fontStyle: 'oblique' }}>
                        {props.object.artists[0].name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={props.object.external_urls.spotify} target="_blank">Listen</Button>
                </CardActions>
                </CardActionArea>
            </Card>
        </div>
    );
}