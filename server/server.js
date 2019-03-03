const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.port || 3000;

let sqlite = require("../database/SQLiteDBHelper.js")

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/', (req, res)=>{
  res.send("Hello world");
  res.end();
})

app.use('/wat', express.static(path.join(__dirname, "index.html")));


app.listen(PORT, ()=>{
  console.log(`App listening on Port:${PORT}`)
})