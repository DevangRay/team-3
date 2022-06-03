var express = require('express');
var router = express.Router(); 
const db = require("../firebase")
const {getDocs, collection, doc, deleteDoc, updateDoc} = require("firebase/firestore")


router.get('/users', async (req, res) => {
    try {
        let query = await getDocs(collection(db, "users"))
        let response = [];
        query.forEach((doc) => response.push({...doc.data(), id: doc.id}))
        return res.status(200).json(response);
    } catch(error) {
        console.log(error)
        return res.status(500).json(error);
    }
    return res.status(200).send('API working!')
} 
)


module.exports = router; 