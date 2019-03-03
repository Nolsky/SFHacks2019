const sqlite3 = require("sqlite3").verbose();
const path = require("path");

let db = new sqlite3.Database(path.join(__dirname, "/quotes.db"), (err)=>{
  if(err){
    console.log(`Error: ${err}`);
  }
  console.log('connected to DB')
})

let query = "SELECT * FROM intraday";

// console.log(db)

db.all(query, [], (err, rows)=>{
  if(err){
    throw(err)
  }
  rows.forEach((row)=>{

  });
});

module.exports = db;