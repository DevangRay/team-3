var express = require('express');
var router = express.Router();

const db = require("../firebase")
const {getDocs, collection} = require("firebase/firestore")

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


router.post("/createPost", (req, res, next) => {
    console.log(req.body)
    res.send("Received")
  })


module.exports = router;