import React from 'react';
import {useState} from 'react';

import axios from'axios';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CreateForum(props) {
  const [open, setOpen] = useState(false);
  const [newForumName, setNewForumName] = useState("");
  const [creator, setCreator] = useState("mohamedUsername")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setNewForumName("")
    setOpen(false);
  };
  const handleSubmit = () => {
      const tempNewForum = {
        creator: creator,
        forumName: newForumName,
        forumID: props.forumList.length
      }
      axios.post("http://localhost:9000/forum/createForum", tempNewForum)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      setOpen(false);
      //setNewForumName("")
    }

  const handleInputText = event => {
    setNewForumName(event.target.value);
    console.log("newForumName",newForumName)
};

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Forum
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Forum</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new Forum, please enter the name of the Forum down bellow and hit Submit.
          </DialogContentText>
          <TextField
            onChange={handleInputText}
            autoFocus
            margin="dense"
            id="name"
            label="Fourm Name"
            type="text"
            fullWidth
            variant="filled"
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