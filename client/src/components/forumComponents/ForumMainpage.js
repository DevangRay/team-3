import React, {useState, useEffect} from 'react'

import CreateForum from './CreateForum'
import ForumViewer from './ForumViewer'


import {Box, InputLabel, MenuItem, FormControl, Select} from '@mui/material'

import {TextField, Stack, Autocomplete} from '@mui/material'

function Forum() {
  
  const [currentForumList, setCurrentForumList] = useState([]);
  const [forum, setForum] = useState('');

  // useEffect(() => {
  //   const forumList = []
  //       getDocs(collection(db, "forums"))
  //       .then((allForums) => {
  //         allForums.forEach((forum) => 
  //           forumList.push({creator:forum.creator, forumID:forum.forumID, forumName:forum.forumName, ...forum.data()
  //           }))
  //           return forumList
  //       }).then(
  //         forumList=>setCurrentForumList(forumList), console.log(db)
  //       )
    
  // }, [])  

  const tempData = [{label: 'Forum 1', forumID: 0}, {label: 'Forum 2', forumID: 1},{label: 'Forum 3', forumID: 2},{label: 'Forum 4', forumID: 3}]

  const handleForumSelectSearch = (event) => {
    console.log(event)
    setForum(event.target.innerText);
  };



  return (
    <>
      <h1>Forum Main Page</h1>
      <h1>Testing searchable dropdown</h1>
      <Autocomplete
      onChange={handleForumSelectSearch}
      disablePortal
      id="forum-drop-down-search"
      options={tempData}
      sx={{ width: 300 }}
      renderInput={(params) =>
      <TextField {...params} label="Forum" />}
    />
      <CreateForum />
      <ForumViewer currentForum = {forum}/>
    </>

    
  )
}

export default Forum









// const handleForumSelect = (event) => {
//   console.log(event)
//   setForum(event.target.value);
// };


// {/* <Box sx={{ minWidth: 120 }}>
// <FormControl fullWidth>
//   <InputLabel>Forum</InputLabel>
//   <Select
//     value={forum}
//     label="Fourm"
//     onChange={handleForumSelect}
//   >
//     <MenuItem value={"Forum1"}>Forum1</MenuItem>
//     <MenuItem value={"Forum2"}>Forum2</MenuItem>
//     <MenuItem value={"Forum3"}>Forum3</MenuItem>
//   </Select>
// </FormControl>
// </Box> */}