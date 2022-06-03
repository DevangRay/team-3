import React, {useState, useEffect} from 'react'

import {Box, Button } from '@mui/material'
import Post from './Post';

function Posts(props) {
  const currentForumList = props.currentForumList
  const currentForumName = props.currentForumName
  const [postList, setPostList] = useState([])
  const [currentPostList, setCurrentPostList] = useState([]);

  const makeCurrentPostList = () => {
    console.log("Check if postList exists: ", postList)
    const tempPostList = [];
    for (let i = 0; i < postList.length; i++){
      console.log("index " + i + "of postList: ", postList[i])
      if(postList[i].forumName===currentForumName){
        tempPostList.push(postList[i])
      }
    }
    console.log("Check if tempPostList is good to go")
    tempPostList.sort((a, b) => (a.postID > b.postID) ? 1 : -1)
    setCurrentPostList(tempPostList)
  };

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
    .then(makeCurrentPostList())
  },[currentForumName])

  const debugg = () => {
    console.log("PostList:", postList)
    console.log("currentPostList:", currentPostList)
    console.log("currentForumName", currentForumName)
    console.log("currentForumList: ", currentForumList)
  };

  if(currentForumName === "Choose Forum"){
    return null
  }

  return (

    <div>
        Will have map function that takes the list of posts and if the current forum matches the forum id then the post will display
        <Button onClick={debugg}> Debugging</Button>
        {
          currentPostList.map((post) => (
            <Post key={post.postID}data={post}/>
          ))

        }
       
    </div>
  )
}

export default Posts


 // const userList1 = [{
  //   likedPosts:[],
  //   name:"Mohamed",
  //   password:"123",
  //   publicProfile:false,
  //   showLikedSongs:false,
  //   showTopArtists:false,
  //   showTopSongs:false,
  //   username:"motemp1"
  // },{
  //   likedPosts:[],
  //   name:"Ahmed",
  //   password:"456",
  //   publicProfile:false,
  //   showLikedSongs:false,
  //   showTopArtists:false,
  //   showTopSongs:false,
  //   username:"ahmedtemp2"
  // }]
  // const postList1 = [{
  //   creator:"Mo",
  //   forumID:"0",
  //   postID:"0",
  //   text:"Testing1",
  //   usersLiked:["Mo","Ahmed"]
  // },{
  //   creator:"Ahmed",
  //   forumID:"0",
  //   postID:"1",
  //   text:"I hope this works",
  //   usersLiked:["Ahmed","Sara"]
  // },{
  //   creator:"Sara",
  //   forumID:"0",
  //   postID:"2",
  //   text:"This is in progress",
  //   usersLiked:["Mo","Ahmed"]
  // }];




  //old code


  // const makeCurrentPostList = () => {
  //   console.log("Check if postList exists: ", postList)
  //   const tempPostList = [];
  //   for (let i = 0; i < postList.length; i++){
  //     console.log("index " + i + "of postList: ", postList[i])
  //     if(postList[i].forumID===currentForumID){
  //       tempPostList.push(postList[i])
  //     }
  //   }
  //   console.log("Check if tempPostList is good to go")
  //   setCurrentPostList(tempPostList)
  // };

  // const getForumID = () => {
  //   console.log("Check if forumList: ", forumList)
  //   for (let i = 0; i < forumList.length; i++){
  //     console.log("index " + i + "of forumList: ", forumList[i])
  //     if(currentForumName===forumList[i].forumName){
  //       setCurrentForumID(forumList[i].forumID)
  //     }
  //   }
  // };

  // useEffect(()=> {
  //   fetch('http://localhost:9000/forum/allForums')
  //   .then(res=>res.json())
  //   .then(
  //     data => {
  //       const tempList = data.result.map(forum => forum)
  //       const finalList = []
  //       for (let i = 0; i < tempList.length; i++) {
  //         finalList.push({creator: tempList[i].creator ,forumName: tempList[i].forumName, forumID: tempList[i].forumID}) 
  //       }
  //       setForumList(finalList)
  //     }
  //   ).then(getForumID())
  // },[])


  // useEffect(()=> {
  //   fetch('http://localhost:9000/users/allUsers')
  //   .then(res=>res.json())
  //   .then(
  //     data => {
  //       const tempList = data.result.map(user => user)
  //       const finalList = []
  //       for (let i = 0; i < tempList.length; i++) {
  //         finalList.push( {
  //             likedPosts:tempList[i].likedPosts,
  //             name:tempList[i].name,
  //             password:tempList[i].password,
  //             publicProfile:tempList[i].publicProfile,
  //             showLikedSongs:tempList[i].showLikedSongs,
  //             showTopArtists:tempList[i].showTopArtists,
  //             showTopSongs:tempList[i].showTopSongs,
  //             username:tempList[i].username
  //           }
  //           ) 
  //       }
  //       setUserList(finalList)
  //     }
  //   )
  // },[])

  // useEffect(()=> {
  //   fetch('http://localhost:9000/posts/allPosts')
  //   .then(res=>res.json())
  //   .then(
  //     data => {
  //       const tempList = data.result.map(post => post)
  //       const finalList = []
  //       for (let i = 0; i < tempList.length; i++) {
  //         finalList.push( {
  //             creator:tempList[i].creator,
  //             forumID:tempList[i].forumID,
  //             postID:tempList[i].postID,
  //             text:tempList[i].text,
  //             usersLiked:tempList[i].usersLiked
  //           }
  //           ) 
  //       }
  //       setPostList(finalList)
  //     }
  //   ).then(makeCurrentPostList())
  // },[])