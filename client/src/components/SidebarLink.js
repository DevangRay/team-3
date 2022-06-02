import "./sidebarLink.css"
import { Routes, Route, Link } from 'react-router-dom';

function SidebarLink({text, Icon, link}){
    
    return (
        <div>
            <Link to = {link} style={{ textDecoration: 'none'}}>
            <div className="link">
            <Icon style={{color:"black"}}/>
            <h2 style={{color:"black"}}>{text}</h2>
            </div>
            </Link>
        </div>
    );
}

export default SidebarLink;