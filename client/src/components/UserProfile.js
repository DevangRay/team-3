import React from "react";
import {useState} from "react";
import "./UserProfile.css";
import {Grid, Button, Switch, ListItem} from '@mui/material';
import { Container } from "@mui/system";
import { Box } from "@mui/system";

var showProfile = false;
var likedPosts = 0; 
var name = "Gunny";

function UserProfile() {

    const [buttonText, setButtonText] = useState("Private");

    function profile(props) {
        console.log(props)
        if(props == false) {
            showProfile = true;
            setButtonText('Public');
        } else {
            showProfile = false;
            setButtonText('Private');
        }
    }

    return (
      <div className="UserProfile">
          <Container>
            <div className="title">Hello, {name}!</div>
            <ListItem className="attributes">Username: </ListItem>
            <ListItem className="attributes">Liked Posts: {likedPosts}</ListItem>
            <hr color="black"></hr>

          <Grid container className="mainGrid" spacing={1}>
            <Grid item md={8}><Container className="halfPage">
      <div className="attributes">
      <Box padding={2} >
          Profile Is Currently:
          <button className="privacyButton" onClick={() => profile(showProfile)}>{buttonText}</button>
      </Box>
          <Button className="profileButtons">Liked Songs</Button>
          <Button className="profileButtons">Liked Artists</Button>
          <Button className="profileButtons">Liked Posts</Button>
      </div>
      </Container></Grid>
          </Grid>
          </Container>
      </div>
    );
  }
  
  export default UserProfile;