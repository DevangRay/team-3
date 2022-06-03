import React from 'react'
import "./Sidebar.css"
import SidebarLink from "./SidebarLink"
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



const Nav = () => {

  return (
    <div className='sidebar' >
      <SidebarLink  text = "Homepage" Icon ={HomeIcon} link="/home" />
      <SidebarLink text = "Top Artist" Icon = {StarIcon} link = "/top-artists" />
      <SidebarLink text = "Top Song" Icon = {AutoAwesomeIcon} link="/top-song"/>
      <SidebarLink text = "Liked Songs" Icon = {FavoriteIcon} link="/liked-song" />
      <SidebarLink text = "Discover" Icon = {MessageIcon} link = "/discover" />
       {/* <SidebarLink text = "Messages" Icon = {MessageIcon} link="/message" /> */}
      <SidebarLink text = "Profile" Icon = {PersonIcon} link="/profile" />
      <Link to="/login" style={{ textDecoration: 'none'}}><Button id="logout">Log Out</Button></Link>
    </div>
  )
}

export default Nav
