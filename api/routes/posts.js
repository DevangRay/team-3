var express = require('express');
var router = express.Router();

const db = require("../firebase")
const {getDocs, collection,addDoc} = require("firebase/firestore")

router.get("/allPosts", async (req, res, next) => {
  try{
    const allDocData = []
    const docs = await getDocs(collection(db, "posts"))
    docs.forEach((doc) => allDocData.push(doc.data()))
    res.json({result: allDocData})
    console.log(allDocData)
  } catch(err){
    console.log(err)
    res.status(500).send(err)
  }
})

router.post('/createPost', async (req, res) => {
    try{
        console.log(req.body)
        const ref = await addDoc(collection(db, "posts"), {
            creator: req.body.creator,
            forumName: req.body.forumName,
            postID: req.body.postID,
            text: req.body.text,
            usersLiked: req.body.usersLiked
        })
        console.log('Document written with id', ref.id)
        return res.status(201).json({message: 'Post Successful!'})
    } catch(error){
        console.log(error)
        return res.status(500).send(error)
    }

})


module.exports = router;