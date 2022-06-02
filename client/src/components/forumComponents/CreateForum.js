import React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CreateForum() {
  const [open, setOpen] = useState(false);
  const [newForum, setNewForum] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    //post to firebase
    setOpen(false);
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