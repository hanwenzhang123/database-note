Opening A Database

//const { printQueryResults } = require('./utils');

// require the 'sqlite3' package here
const sqlite3 = require('sqlite3')
// open up the SQLite database in './db.sqlite'
const db = new sqlite3.Database('./db.sqlite')


//Retrieving All Rows
db.all('SELECT * FROM TemperatureData ORDER BY year', (error, rows) => {
  if (error) {
    throw error;
  }
  printQueryResults(rows);
});

db.all("SELECT * FROM Dog", (error, rows) => {
  printQueryResults(rows.find(row => row.id === 1));
});


//Retrieving A Single Row

db.get("SELECT * FROM TemperatureData WHERE year = 1992")

db.get("SELECT * FROM Dog WHERE owner_name = 'Charlie'", (error, row) => {
  printQueryResults(row); 
});
  
