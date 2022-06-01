var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var auth = require('./auth')
var dotenv = require('dotenv').config()

//actual api calls after authorization
router.get('/', async (req, res, next) => {
    try{
        console.log(req.query.token)
        const url = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=5'
        const data = await fetch(url, {headers: {
            'Authorization': 'Bearer ' + req.query.token
        }}).catch(err=> console.log(err))
            .then(res=> res.json())
            .then(data => data)

        res.status(200).send(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})


module.exports = router;