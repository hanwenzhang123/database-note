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
