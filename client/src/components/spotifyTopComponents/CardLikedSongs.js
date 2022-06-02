import { CardActions, CardContent, CardMedia, Typography, Card, Button } from '@mui/material';
import './spotify.css';

export default function CardLikedSongs(props) {
    return(
        <div>
            <Card raised={true} className="song" >
                <CardMedia 
                    component = "img"
                    image = {props.src.url}
                    height="300"
                    widght="300"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        "{props.title}"
                    </Typography>
                    {/* <Typography variant="body2">{props.author}</Typography> */}
                    <br></br>
                    <Typography variant="body1" color = "text.secondary">
                        {props.band}
                    </Typography>
                    <Typography variant="body1" color = "text.secondary">
                        {props.album}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={props.link} target="_blank"><a>Listen</a></Button>
                </CardActions>
            </Card>
        </div>
    );
}