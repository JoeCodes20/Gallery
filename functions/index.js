const functions = require("firebase-functions");
const express = require("express");
const app = express()


app.listen(3001,()=>{
       console.log()
})
app.get("/", (req, res)=>{
       res.send("hello world created throw node.js")
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest(app);
