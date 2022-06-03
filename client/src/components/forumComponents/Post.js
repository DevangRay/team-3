import React from 'react'
import {useState, useEffect} from 'react'

import {Box, Button } from '@mui/material'

import axios from 'axios'

function Post (props) {
    const{data} = props;
    const [userLikedAlready, setUserLikedAlready] = useState(false)
    const [likedUserList, setLikedUserList] = useState();
    const [likedNumber, setLikedNumber] = useState(0)
    const[liked, setLiked] = useState("Not Liked");
    const [userList, setUserList] = useState([])
    const[currentUser, setCurrentUser] = useState("mohamedUsername")

    const getPostLikeData = () => {
      setLikedNumber(data.usersLiked.length)
    }
    
    const checkIfLiked = () => {
      if(!data.usersLiked.indexOf(currentUser)){
        setLiked("Liked")
      } else {
        setLiked("did not Like")
      }
    }
    

    const likePost = () => {
        setLiked("Liked")
        const temp = likedNumber + 1
        setLikedNumber(temp)
        
     }
    const unLikePost = () => {
        setLiked("Not Liked") 
        const temp = likedNumber - 1
        setLikedNumber(temp)
    }


    useEffect(() => {
      checkIfLiked()
      getPostLikeData()
}, [])


  useEffect(() => { 
    fetch('http://localhost:9000/users/allUsers')
    .then(res=>res.json())
    .then(
      data => {
        const tempList = data.result.map(user => user)
        const finalList = []
        for (let i = 0; i < tempList.length; i++) {
          finalList.push( {
              name:tempList[i].name,
              password:tempList[i].password,
              publicProfile:tempList[i].publicProfile,
              showLikedSongs:tempList[i].showLikedSongs,
              showTopArtists:tempList[i].showTopArtists,
              showTopSongs:tempList[i].showTopSongs,
              username:tempList[i].username
            }
            ) 
        }
        setUserList(finalList)

      }
    )
  }, [])


  return (
    
    <Box sx={{ border: 1 }} >
      <h2>Creator: {data.creator}</h2>
      <h3>{data.text}</h3>
      <h3>Likes: {likedNumber}</h3>
      <Button onClick={likePost}>Add to Like</Button>
      <Button onClick={unLikePost}>Remove from Like</Button>  
      <h4>You {liked} this post</h4>
    </Box>
  )
}

export default Post




// const changeLike = () => {
//   setLikedUserList(data.usersLiked)
//   const userLikedAlready = false;
//   for (let i = 0; i < liked; i++){
//     if(currentUser === data.usersLiked[i]){
//       setUserLikedAlready(true);
//     }
//   }
//   if(liked==="Liked" && !userLikedAlready){
//     const tempPost = likedUserList;
//     tempPost.push(currentUser)
//     const newPostToPost={creator:currentUser,
//       forumName:data.creator,
//       likes:data.likes,
//       postID:data.length,
//       text:data.text,
//       usersLiked:tempPost}
//     console.log("newPostToPost: ",newPostToPost)
//     axios.post("http://localhost:9000/posts/updateLike", newPostToPost)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err)) 
//   }

//   if(liked==="Not Liked" && userLikedAlready){
//     const tempPost = likedUserList;
//     tempPost = tempPost.filter(function(item) {
//       return item !== currentUser
//     })
//     const newPostToPost={creator:currentUser,
//       forumName:data.creator,
//       likes:data.likes,
//       postID:data.length,
//       text:data.text,
//       usersLiked:tempPost}
//     console.log("newPostToPost: ",newPostToPost)
//     axios.post("http://localhost:9000/posts/updateLike", newPostToPost)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err)) 
//   }
// }