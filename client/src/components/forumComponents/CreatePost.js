import React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CreatePost(props) {
  const{currentForumName} = props;
  const [open, setOpen] = useState(false);
  const [tempText, setTempText] = useState("");
  const [newPost, setNewPost] = useState({
    creator:"",
    forumID:"",
    likes:0,
    postID:"",
    text:""
  });

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
    setNewPost({
      creator:"temp",
      forumID:currentForumName,
      likes:0,
      postID:"0",
      text:tempText
      
    })
    //post to firebase
    setOpen(false);
    setTempText("")
  };

  

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