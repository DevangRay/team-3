var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var auth = require('./auth')
var dotenv = require('dotenv').config()
const db = require("../firebase.js");
const {setDoc, doc, deleteDoc}= require("firebase/firestore");

const collectionName = "users"

router.post("/profile", (req, res, next) => {
    // console.log("profilereq.params: ", req.params)
    // const profileId = req.params.id
    console.log("user.js profile: ", req.body);
    const profileId = req.body.name
    const data = {
        name: profileId,
        // email: req.body.email,
        password: profileId,
        username: profileId,
        showTopSongs: false,
        showTopArtists: false,
        showLikedSongs: false,
        publicProfile: false
    } 
    setDoc(doc(db, collectionName, profileId), data)
    .then(res.send('Written'))
    .catch((err) => {console.log("user post error: ", err)})
})

//actual spotify api calls after authorization
router.get('/home', async (req, res, next) => {
    try{
        // console.log("user.js query: ", req.query.token)
        // const url = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=5'
        const url = 'https://api.spotify.com/v1/me'
        const data = await fetch(url, {headers: {
            'Authorization': 'Bearer ' + req.query.token
        }}).catch(err=> console.log("user/ get error",err))
            .then(res=> res.json())
            .then(data => data)

        res.send(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

router.get('/top-artist', (req, res, next) => {
    try{
        console.log(req.query)
        const url = "https://api.spotify.com/v1/me/top/artists?offset=0&limit=10&time_range="+req.query.timerange
        fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + req.query.token
        }}).catch(err=> console.log("top artist error",err))
        .then(res=> res.json())
        .then(result => {
            // console.log("api result:" ,result.items)
            res.send(result.items)
        })
    }
    catch(err) {
        console.log("user.js, top-artist error: ", err)
        res.status(500).send(err)
    }
})

router.get('/top-songs', (req, res, next) => {
    try{
        console.log(req.query)
        const url = "https://api.spotify.com/v1/me/top/tracks?offset=0&limit=10&time_range="+req.query.timerange 
        fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + req.query.token
        }}).catch(err=> console.log("top song error",err))
        .then(res=> res.json())
        .then(result => {
            // console.log("api result:" ,result.items)
            res.send(result.items)
        })
    }
    catch(err) {
        console.log("user.js, top-song error: ", err)
        res.status(500).send(err)
    }
})

router.get('/saved-songs', (req, res, next) => {
    try{
        // console.log(req.query)
        const url = "https://api.spotify.com/v1/me/tracks"
        fetch(url, {
            headers: {
            'Authorization': 'Bearer ' + req.query.token
        }}).catch(err=> console.log("saved song error",err))
        .then(res=> res.json())
        .then(result => {
            // console.log("api result:", result)
            res.send(result.items)
        })
    }
    catch(err) {
        console.log("user.js, top-song error: ", err)
        res.status(500).send(err)
    }
})

module.exports = router;