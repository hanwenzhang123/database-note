To perform SQL commands that do not return rows, we use db.run() to run the command.
db.run() does not return a value, but, depending on the SQL command, it may attach properties to the this keyword within the scope of the callback.


db.run('<SQL query>', function(error) {
  // this callback will be called after the query has run.
}).



const sqlite = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');

const newRow = {
  location: 'Istanbul, Turkey',
  year: 1976,
}
// Your code below!

db.run('INSERT INTO TemperatureData (location, year) VALUES ($location, $year)', {
  $location: newRow.location,
  $year: newRow.year
}, function(error) {
  // handle errors here!

  console.log(this.lastID);
});
