import React from 'react'
import {useState} from 'react'
import {Box, Button } from '@mui/material'

function Post(props) {
    const{data} = props;

    const[liked, setLiked] = useState("Not Liked");
    const[currentUser, setCurrentUser] = useState("Mo")

    if(!data.usersLiked.indexOf(currentUser)===1){
        setLiked("Liked")
    }

    const likePost = () => {
        setLiked("Liked")
        //post to firebase and add to like post array in user
        //post to firebae and add to users Liked array in post 
     }

    const unLikePost = () => {
        setLiked("Not Liked")
    //delete from firebase users liked post array
    //delete from fireebase posts user liked array  
    }
    
    


  return (
    <Box sx={{ border: 1 }}>
              <h2>Creator:{data.creator}</h2>
              <h3>{data.text}</h3>
              <h3>Likes: {data.likes}</h3>
              <Button onClick={likePost}>Add to Like</Button>
              <Button onClick={unLikePost}>Remove from Like</Button>
              <h4>This post is {liked} by you</h4>
    </Box>
  )
}

export default Post