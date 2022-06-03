import "./sidebarLink.css"
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Button, MenuItem } from "@mui/material";

function SidebarLink({text, Icon, link}){

    return (
        <nav>
            <NavLink activeClassName="active-sidebar" to = {link} style={{textDecoration:'none'}}>
            <div className = 'link'
            >
            <Icon/>
            <h2>{text}</h2>
            </div>
            </NavLink>
        </nav>
    );

}

export default SidebarLink;