var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var dotenv = require('dotenv').config()

const client_id = process.env.clientID 
const client_secret = process.env.clientSecret 
const redirect_uri = 'http://localhost:3000/'
const scope = 'user-top-read user-library-read user-read-recently-played playlist-read-collaborative playlist-read-private' //<- needs to be updated based on what you want to dogit 

router.get("/", async (req, res, next) => {
    try {
        const url = 'https://accounts.spotify.com/authorize?client_id=' + client_id + '&response_type=code&redirect_uri='+redirect_uri + '&scope='+scope
        res.status(200).json({url: url})
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

router.get("/callback", async(req, res, next) => {
    console.log("_________________________________________________________________________")
    try {
        const code = req.query.code
        console.log("query:", req.query)
        const url = "https://accounts.spotify.com/api/token?grant_type=authorization_code&code=" + code + "&redirect_uri=" + redirect_uri
        const headers = {
            'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret, 'utf8').toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        fetch(url, {method: 'post', headers: headers}).catch(err => console.log(err))
        .then(res => res.json()).then(data => {
            console.log("auth.js: ", data)
            obj = {
                url: 'http://localhost:3000/home',
                token: data.access_token
            }
            return obj
        }).then(obj => res.json(obj))
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = router