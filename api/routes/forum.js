var express = require('express');
var router = express.Router();

const db = require("../firebase")
const {getDocs, addDoc, collection} = require("firebase/firestore")

router.get("/allForums", async (req, res, next) => {
  try{
    const allDocData = []
    const docs = await getDocs(collection(db, "forums"))
    docs.forEach((doc) => allDocData.push(doc.data()))
    res.json({result: allDocData})
    console.log(allDocData)
  } catch(err){
    console.log(err)
    res.status(500).send(err)
  }
})

router.post('/createForum', async (req, res) => {
  try{
      console.log(req.body)
      const ref = await addDoc(collection(db, "forums"), {
          creator: req.body.creator,
          forumID: req.body.forumID,
          forumName: req.body.forumName
      })
      console.log('Document written with id', ref.id)
      return res.status(201).json({message: 'Post Successful!'})
  } catch(error){
      console.log(error)
      return res.status(500).send(error)
  }

})


module.exports = router;