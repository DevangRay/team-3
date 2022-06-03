import React from 'react';
import {useState, useEffect} from 'react';

import axios from 'axios'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//will get user form the contextAuthorization token

export default function CreatePost(props) {
  const{currentForumName} = props;
  const [open, setOpen] = useState(false);
  const [postList, setPostList] = useState([])
  const [currentUser, setCurrentUser] = useState("mohamedUsername")
  const [tempText, setTempText] = useState("");
  const [newPost, setNewPost] = useState({
    creator:currentUser,
    forumName:currentForumName,
    likes:0,
    postID:postList.length,
    text:tempText
  });

  useEffect(()=>{
    fetch('http://localhost:9000/posts/allPosts')
    .then(res=>res.json())
    .then(
      data => {
        const tempList = data.result.map(post => post)
        const finalList = []
        for (let i = 0; i < tempList.length; i++) {
          finalList.push( {
              creator:tempList[i].creator,
              forumName:tempList[i].forumName,
              postID:tempList[i].postID,
              text:tempList[i].text,
              usersLiked:tempList[i].usersLiked
            }
            ) 
        }
        setPostList(finalList)
      }
    )
  },[])

  const handleClickOpen = () => {
    setOpen(true);
  };



  const handleClose = () => {
    setOpen(false);
  };
  //will have to make api call to get both the current list of forum
  //and posts to get the current forumID from currentForumName
  //as well as get the total post number to get the postID

  const handleInputText = event => {
    setTempText(event.target.value);
    console.log("TempText",tempText)
};

  const handleSubmit = () => {
    const newPostToPost={creator:currentUser,
      forumName:currentForumName,
      likes:0,
      postID:postList.size,
      text:tempText}
    setNewPost(newPostToPost)
    console.log("newPost: ",newPost)
    post()
    setOpen(false);
    setTempText("")
  };

  const post = () => {
    axios.post("http://localhost:9000/posts/createPost", newPost)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }

  
  if(currentForumName==="Choose Forum"){
    return null
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create a new Post.
            Please end post in a space.
          </DialogContentText>
          <TextField
            onChange={handleInputText}
            value={tempText}
            autoFocus
            margin="dense"
            id="name"
            label="Post Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}