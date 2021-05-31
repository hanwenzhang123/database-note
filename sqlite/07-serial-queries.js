db.serialize(() => {
  // All your current db.<method> code
});

The DROP TABLE query should be completely closed before the db.each():

// Inside db.serialize():
db.run('DROP TABLE ....',
  err => {
    // Handle errors
  }
);
db.each('<query>', (err, row) => {
  // Your other queries
});

Your code inside db.serialize() should now have this structure:

db.run('DROP TABLE ....', (err) => {
  // Contents for error handling
});
db.run('CREATE TABLE ... ', (err) => {
  // Contents for error handling
});
db.each('<query>', (err, row) => {
  // All the rest of your logic
});

Use db.all() to select many rows.




const { calculateAverages, addClimateRowToObject, logNodeError, printQueryResults } = require('./utils');
const sqlite = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');

const temperaturesByYear = {};

// start by wrapping all the code below in a serialize method
db.serialize(() => { 
  db.run('DROP TABLE IF EXISTS Average', error => {
    if (error) {
      throw error;
    }
  })
  db.run('CREATE TABLE Average (id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)', logNodeError);
  db.each('SELECT * FROM TemperatureData',
    (error, row) => {
      if (error) {
        throw error;
      }
      addClimateRowToObject(row, temperaturesByYear);
    }, 
    error => {
      if (error) {
        throw error;
      }
      const averageTemperatureByYear = calculateAverages(temperaturesByYear);
      averageTemperatureByYear.forEach(row => {
        db.run('INSERT INTO Average (year, temperature) VALUES ($year, $temp)', {
          $year: row.year,
          $temp: row.temperature
        }, err => {
          if (err) {
            console.log(err);
          }
        });
      });
    db.all('SELECT * FROM Average',
    (error, row) => {
      printQueryResults(row)
    })
    });
  });


  
