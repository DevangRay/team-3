var express = require('express');
var router = express.Router();

const db = require("./firebase")
const {getDocs, collection} = require("firebase/firestore")

router.get("/allForums", async (req, res, next) => {
  try{
    const allDocData = []
    const docs = await getDocs(collection(db, "forums"))
    docs.forEach((doc) => allDocData.push(doc.data()))
    res.json({result: allDocData})
  } catch(err){
    console.log(err)
    res.status(500).send(err)
  }
})


module.exports = router;