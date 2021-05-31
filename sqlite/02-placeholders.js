//where col_name is the name of a column to match
//$placeholder is filled in with the value associated with the $placeholder in the object provided as the second argument.

db.get('SELECT * from TableName WHERE col_name = $placeholder',
  {
    $placeholder: 'some value'
  },
  (err, row) => {
    // do something with results
  }
)



const furLength1 = "short";
const furLength2 = "long";
const furColor1 = "brown";
const furColor2 = "grey";
 
const findDogByFur = (length, color) => {
  db.all(
    "SELECT * FROM Dog WHERE fur_length = $furLength AND fur_color = $furColor", 
    {
      $furLength: length,
      $furColor: color
    }, 
    (error, rows) => {
      printQueryResults(rows);
    }
  );
});
 
findDogByFur(furLength1, furColor1); // prints all dogs with short brown fur.
findDogByFur(furLength2, furColor1); // prints all dogs with long brown fur.
findDogByFur(furLength1, furColor2); // prints all dogs with short grey fur.
findDogByFur(furLength2, furColor2); // prints all dogs with long grey fur




const { printQueryResults } = require('./utils');
const sqlite = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');

const ids = [1, 25, 45, 100, 360, 382];
// your code below:
ids.forEach((id) => { 
  db.get("SELECT * FROM TemperatureData WHERE id = $id",
  {
    $id: id
  },
  (error, rows) => {
    printQueryResults(rows);
  })
})
