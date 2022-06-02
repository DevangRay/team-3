var express = require('express');
var router = express.Router();

const db = require("./firebase")
const {getDocs, collection} = require("firebase/firestore")

router.get("/", async (req, res, next) => {
  const allDocData = []
  // console.log(req.query)  // shows the URL params (stuff after the ? in the URL)
  const docs = await getDocs(collection(db, "fourms"))
  docs.forEach((doc) => allDocData.push(doc.data()))
  res.json({result: allDocData})
})


module.exports = router;