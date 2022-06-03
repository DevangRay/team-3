import React, {useState, useEffect} from 'react'
import {Button} from '@mui/material'

import Posts from './Posts';
import CreatePost from './CreatePost';

function ForumViewer(props) {
  const{currentForum} = props;
  const [currentForumID, setCurrentForumID] = useState(99);
  const [forumList, setForumList] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:9000/forum/allForums')
    .then(res=>res.json())
    .then(
      data => {
        const tempList = data.result.map(forum => forum)
        const finalList = []
        for (let i = 0; i < tempList.length; i++) {
          finalList.push({creator: tempList[i].creator ,forumName: tempList[i].forumName, forumID: tempList[i].forumID}) 
        }
        setForumList(finalList)
      }
    )
  },[])

  const debugg = () => {
    console.log(currentForum)
  }

    
  //currentForum gets passed along as prop fine and updates fine 
  return (
    <div>
      <Button onClick={debugg}>Load Search</Button>
      <h1>{currentForum}</h1>
      <CreatePost currentForumName={currentForum}/>
      <Posts currentForumName={currentForum} currentForumList={forumList}/>
    </div>
  )
}

export default ForumViewer



// const getForumID = () => {
//   for (let i = 0; i < forumList.length; i++){
//     console.log("ForumID:", forumList[i].forumID, "ForumName: ", forumList[i].forumName,"prop currentForum: ", currentForum)
//     console.log(currentForum===forumList[i].forumName)
//     let string1 = currentForum
//     let string2 = forumList[i].forumName
//     if(string1===string2){
//       setCurrentForumID(forumList[i].forumID)
//     }
//     console.log("After if statment -> currentForum:", currentForumID)
//   }
//   console.log("currentForumID: ", currentForumID, "currentForum: ", currentForum)
// };