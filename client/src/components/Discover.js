import {Helmet} from 'react-helmet';
import {useState, useEffect} from "react"
import { Button, Grid } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import axios from 'axios'

function Discover() {

    const [users, setUsers] = useState();

    useEffect(() => {
        async function getUsers(){
            const response = await fetch('/appUser/users');
            const body = await response.json();
            setUsers(body);
            console.log('body', body);
        }
        getUsers();
    }, [])
    
    return (
        <div className="Discover">
            <Helmet><title>Discover</title></Helmet>
            <h1>Discover</h1>
            <center>
            {users && users.map((user) =>
            <Grid container rowSpacing={2} border={1} margin={1} width={1000}>
                <Grid item xs={4} >{user.name}</Grid>
                <Grid item xs={4}>{user.username}</Grid>
                <Grid item xs={1} marginBottom={1}><Button><MessageIcon/></Button></Grid>
                <Grid item xs={1}><Button><AccountBoxIcon/></Button></Grid>
            </Grid>
            
            )}
            </center>
        </div>
    );
}

export default Discover;