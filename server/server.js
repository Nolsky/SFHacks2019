const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.port || 3000;

let sqlite = require("../database/SQLiteDBHelper.js")


app.get('/', (req,res)=>{
  res.send("Hello world");
  res.end();
});



app.listen(PORT, ()=>{
  console.log(`App listening on Port:${PORT}`)
})