The syntax to check and log the error is as follows:

if (error) {
  return console.log(error);
}


For db.run(), db.each(), db.get(), and db.all(), the first argument to the callback will always be an Error object if an error occurred. 
If there is no error, this argument will be null. 
We can check if this error exists, and if it does exist, we can handle it.



const { printQueryResults } = require('./utils');
const sqlite = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');

const newRow = {
  location: 'Istanbul, Turkey',
  year: 1976,
  tempAvg: 13.35
}

db.run('INSERT INTO TemperatureData (location, year, temp_avg) VALUES ($location, $year, $tempAvg)', {
  $location: newRow.location,
  $year: newRow.year,
  $tempAvg: newRow.tempAvg
}, function(error) {
  // handle errors here!
  if(error){
    return console.log(error);
  }
  
  console.log(this.lastID);
  
  db.get('SELECT * FROM TemperatureData WHERE id = $id', {
  		$id: this.lastID
	},
  function(error, row){
    printQueryResults(row);
 	});
});

 
