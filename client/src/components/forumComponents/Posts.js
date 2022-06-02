import React from 'react'
import {useState} from 'react'
import {Box, Button } from '@mui/material'
import Post from './Post';

//for each after get api and add has liked 
function Posts() {
  //get list from firebase, map to a post for each
  const [curentForumID, setCurrentForumID] = useState(0);
  const [selected, setSelected] = useState(false);
  
  //will be pulled from firebase 
  const userList = [{
    likedPosts:[],
    name:"Mohamed",
    password:"123",
    publicProfile:false,
    showLikedSongs:false,
    showTopArtists:false,
    showTopSongs:false,
    username:"motemp1"
  },{
    likedPosts:[],
    name:"Ahmed",
    password:"456",
    publicProfile:false,
    showLikedSongs:false,
    showTopArtists:false,
    showTopSongs:false,
    username:"ahmedtemp2"
  }]
  const postList = [{
    creator:"Mo",
    forumID:"0",
    likes:0,
    postID:"0",
    text:"Testing1",
    usersLiked:["Mo"]
  },{
    creator:"Ahmed",
    forumID:"0",
    likes:0,
    postID:"1",
    text:"I hope this works",
    usersLiked:[]
  },{
    creator:"Sarta",
    forumID:"0",
    likes:0,
    postID:"2",
    text:"This is in progress",
    usersLiked:["Mo"]
  }];

  return (

    <div>
        Will have map function that takes the list of posts and if the current forum matches the forum id then the post will display
        {
          postList.map((post) => (
            <Post data={post}/>
          ))

        }
       
    </div>
  )
}

export default Posts