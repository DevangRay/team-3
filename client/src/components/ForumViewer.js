import React from 'react'
import Posts from './Posts';
import CreatePost from './CreatePost';

function ForumViewer(props) {
    const{currentForum} = props;
  return (
    <div>
      <h1>{currentForum}</h1>
      <CreatePost currentForumName={currentForum}/>
      <Posts/>
    </div>
  )
}

export default ForumViewer