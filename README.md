# database-note

## Server Starting Mongoose Code 

``` javascript
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
```

## Mongoose Schema
$npm install mongoose --save

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/{name of the database}', {useNewUrlParser: true, useUnifiedTopology: true});

const {somethingSchema} = new mongoose.Schema({
  name: String,
  year: Number,
  score: Number,
  review: String
});

const {name} = new mongoose.model('{something}', somethingSchema);

const {data} = new {name}({ {key}: {value} });

{data}.save();

```

## SQLite
```javascript
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./db.sqlite');
```
