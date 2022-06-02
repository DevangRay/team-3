import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useReducer } from 'react';
import "./spotify.css"

const initialState = {
    index: 0,
    length: 19
};

function reducer (state, action) {
    switch(action.type) {
        case "next": 
            return {...state, index:((state.index + 1) % 20)}
        case "previous": 
            let newIndex;
            if(state.index === 0) {
                newIndex = 19;
            }
            else{
                newIndex = state.index -1;
            }
            return {...state, index:newIndex}
        default:
            throw new Error();
    }
}

export default function CardLikedSongs(props) {

    const [state, dispatch] = useReducer(reducer, initialState)
    const theme = useTheme();

  return (
      <>
        <div className='leftBuffer'>       </div>
        <Card sx={{ display: 'flex' }} className="likedSong">
        <Box sx={{ display: 'flex', flexDirection: 'column', width:'70%'}}>

            <CardContent sx={{ flex: '1 0 auto' }}>

                <Typography component="div" variant="h3">
                    "{props.array[state.index].track.name}" 
                </Typography>

                <Typography variant="body1" color="text.secondary" component="div">
                    {props.array[state.index].track.artists[0].name}
                </Typography>

                <Typography variant="body1" color="text.secondary" component="div">
                    {props.array[state.index].track.album.name}
                </Typography>

            </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    <IconButton aria-label="previous" onClick={() => dispatch({type:"previous"})}>
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>

                    <IconButton aria-label="play/pause" href={props.array[state.index].track.external_urls.spotify} target="_blank">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>

                    <IconButton aria-label="next" onClick={() => dispatch({type: "next"})}>
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>

                </Box>
        </Box>
            <CardMedia
                component="img"
                sx={{ width: 300, float:"right" }}
                image={props.array[state.index].track.album.images[0].url}
                alt={props.array[state.index].track.album.name}
            />
        </Card>
        <div className='rightBuffer'></div>
    </>
  );
}