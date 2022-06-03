import React, {useState, useEffect} from 'react'

import CreateForum from './CreateForum'
import ForumViewer from './ForumViewer'


import {TextField, Autocomplete, Button} from '@mui/material'

function Forum() {
  
  const [currentForumList, setCurrentForumList] = useState([{label:"Choose Forum", forumID:99}]);
  const [forum, setForum] = useState("Choose Forum");

  useEffect(()=> {
    fetch('http://localhost:9000/forum/allForums')
    .then(res=>res.json())
    .then(
      data => {
        const tempList = data.result.map(forum => forum)
        const finalList = []
        for (let i = 0; i < tempList.length; i++) {
          finalList.push({label: tempList[i].forumName, forumID: tempList[i].forumID}) 
        }
        setCurrentForumList(finalList)
      }
    )
  },[])//Maybe this?

  const forumListChanged = () => {
    fetch('http://localhost:9000/forum/allForums')
    .then(res=>res.json())
    .then(
      data => {
        const tempList = data.result.map(forum => forum)
        const finalList = []
        for (let i = 0; i < tempList.length; i++) {
          finalList.push({label: tempList[i].forumName, forumID: tempList[i].forumID}) 
        }
        setCurrentForumList(finalList)
      }
    )
  };


  //const tempData = [{label: 'Forum 1', forumID: 0}, {label: 'Forum 2', forumID: 1},{label: 'Forum 3', forumID: 2},{label: 'Forum 4', forumID: 3}]

  const handleForumSelectSearch = (event) => {
    setForum(event.target.innerText);
  };

  return (
    <>
      <h1>Forum Main Page</h1>
      <CreateForum forumList = {currentForumList}/>
      <Button></Button>
      <Autocomplete
      onChange={handleForumSelectSearch}
      disablePortal
      id="forum-drop-down-search"
      options={currentForumList}
      sx={{ width: 300 }}
      renderInput={(params) =>
      <TextField {...params} label="Forum" />}
    />
      <ForumViewer currentForum = {forum} methodToChange = {forumListChanged()}/>
    </>

    
  )
}

export default Forum