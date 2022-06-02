import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export default function CardTopSongs(props) {
    const index = props.index + 1;
    return (
        <div>
            <Card raised={true} className="topSong" >
                <CardActionArea href={props.object.external_urls.spotify} target="_blank">
                <CardMedia 
                    component = "img"
                    image = {props.object.album.images[0].url}
                    height="200px"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {index}. {props.object.name}
                    </Typography>
                    {/* <Typography variant="body2">{props.author}</Typography> */}
                    <br></br>
                    <Typography variant="body1" color = "text.secondary">
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