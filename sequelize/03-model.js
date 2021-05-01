Define a Model

Overview
Now that you've created a SQLite database, the next step is to create a database table. In this step, you will configure a Sequelize model to create a table that stores movie titles.

What is a Model?
Sequelize is all about models. As you learned earlier, when using an ORM library like Sequelize, developers interact with a set of models to do database operations.
Instead of interacting directly with the database, Sequelize acts as a mediator that oversees the movement of data from the database to the models and back.

A model in Sequelize represents a table in the database. 
A model also predefines how data should be stored, and determines whether or not a database entry is valid (for example, if the entry should be a number, string, etc.).


Define a Model
Models are often defined as JavaScript classes. Each model (or class) represents a thing that your application will be working with – all of the nouns. 
A model contains a collection of attributes (or class properties) that are used to describe each model instance. 
For example, a "Person" model might include "name" and "age" attributes to represent the name and age of a specific person.


Let's begin to model our Movies table!

1. Define a Movie model. 
In app.js, create a class named Movie that extends the Sequelize.Model base class:

const Sequelize = require('sequelize');
const sequelize = new Sequelize({...});
// Movie model
class Movie extends Sequelize.Model {}
(async () => {
  ...
})();
  
In JavaScript classes, the extends keyword is used to create a subclass, or a child of another class. 
In this case we're extending from Sequelize.Model, which is part of Sequelize's API for model definition.

2. Initialize a model. 
  Call the static class init() method on the model name (Movie) to initialize and configure the model:

const Sequelize = require('sequelize');
const sequelize = new Sequelize({...});
// Movie model
class Movie extends Sequelize.Model {}
Movie.init();
(async () => {
  ...
})();
  
Movie.init() defines a new table in the database with the name 'Movies'. Sequelize will look for information in the Movies table.


An important distinction is that the model name is singular and the table name is plural. 
Sequelize uses a library called inflection under the hood to automatically pluralize the table name (for example, from Movie to Movies).



Set Model Attributes and Options
The init() method takes two arguments. The first argument is an object literal that defines the model's attributes
  -- each attribute is a column of the table. The second argument is an object literal that sets the model options.

Now that we have a 'Movies' table, let's create a column for movie titles.

1. Set the model attributes. 
Define a column named 'title' by passing init() an object with a title property. Each column must have a data type. The title should be a string data type, so set the value of title to Sequelize.STRING:

const Sequelize = require('sequelize');
const sequelize = new Sequelize({...});
// Movie model
class Movie extends Sequelize.Model {}
Movie.init({
  title: Sequelize.STRING
});
(async () => {
  ...
})();
  
Sequelize's data types allow attributes (or column names) to be assigned only certain types of data. 
  For example, Sequelize.STRING indicates that the value of title should be a variable length string with a default length of 255 (for example, 'Spider-Man: Into the Spider-Verse').

2. Set the model options. 
  You can set a number of options in your model definition; for example, a custom name for your model and a timestamp. The only required option is a sequelize property that defines the sequelize instance to attach to the model.

3. Pass init() an object as a second argument. 
  Inside the object, attach the Sequelize instance by setting the sequelize property to the variable sequelize:

const Sequelize = require('sequelize');
const sequelize = new Sequelize({...});
// Movie model
class Movie extends Sequelize.Model {}
Movie.init({
  title: Sequelize.STRING
}, { sequelize }); // same as { sequelize: sequelize }
(async () => {
  ...
})();
Note: Sequelize will throw an error if you don't provide a sequelize property.
This code initializes a model representing a 'Movies' table in the database, with one column: 'title'.



Synchronize Models with the Database
The final step to set up Sequelize is to synchronize your models with the database. 
Sequelize provides the sync() method, which automatically creates or updates your database tables (according to your model definition).
In other words, we want to create the actual 'Movies' table. We’ve only defined the model in JavaScript. We need to sync those changes.

You can synchronize individual tables by calling .sync() on a table.

1. Inside the async function, await a Promise returned by calling Movie.sync():

...
// Movie model
class Movie extends Sequelize.Model {}
Movie.init({
  title: Sequelize.STRING,
}, { sequelize });
(async () => {
  // Sync 'Movies' table
  await Movie.sync();
  try {
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
  
Now that you're successfully connecting to the database, feel free to comment out (or remove) the code inside the try block, which was used to test the connection.

  As you create more models, you may want a way to sync all your models at once. Calling the sync() method on the sequelize instance lets you do just that, automatically create and update all the tables in the database.

2. Replace Movie.sync() with sequelize.sync():

class Movie extends Sequelize.Model {}
Movie.init({
  title: Sequelize.STRING,
}, { sequelize });
(async () => {
  // Sync all tables
  await sequelize.sync();
  try {
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
  
Calling sync() issues a CREATE TABLE IF NOT EXISTS statement, which will sync all models and create tables that do not exist in the database. In development (or testing), you may want to refresh your database tables each time you start your app. For this, the sync() method accepts an object with a force parameter that lets you control the database synchronization.

3. Force sync all models. 
Pass { force: true } to the sync() method:
  
class Movie extends Sequelize.Model {}
Movie.init({ ... });
(async () => {
  await sequelize.sync({ force: true });
  try {
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
Calling sync({ force: true }) issues a DROP TABLE IF EXISTS statement, which completely deletes the table, before issuing the CREATE TABLE IF NOT EXISTS statement. In other words, it will drop a table that exists, each time you start your app, and recreate it from the model definition.



Create a Record
Finally, let's create one test record (or a row in the database table) that stores a movie title. To create a record, you use the Model.create() method.

  1. Insert data into the Movies table. 
  Inside the try block, initialize a movie variable to a new Movie instance with await Movie.create():

class Movie extends Sequelize.Model {}
Movie.init({ ... });
(async () => {
  await sequelize.sync({ force: true });

  try {
    // Instance of the Movie class represents a database row
    const movie = await Movie.create();

  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }     
})();
  
Movie.create() builds a new model instance, which represents a database row, and automatically stores the instance's data. It returns a Promise object, which resolves or rejects based on the successful or failed interaction with your database.

create() requires an object with properties that map to the model attributes (the ones defined in Movie.init(), for example). Our Movie model currently has one attribute, title, so let's create a new row with a movie title.

2. Pass Movie.create() an object with a title property. 
Set the value to your favorite movie title as a string:

class Movie extends Sequelize.Model {}
Movie.init({ ... });

(async () => {
  await sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({
      title: 'Toy Story',
    });

  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
  
  
Test Your Record
We'll revisit creating records later in the course. For now, let's quickly log the movie variable (Movie instance) to the console to see our newly created record.

1. Log the data returned by movie.toJSON():

...
(async () => {
  await sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({
      title: 'Toy Story',
    });
    console.log(movie.toJSON());

  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
Calling movie.toJSON() converts the instance to JSON – in other words, it returns a JSON representation of the data.

If you log just the instance, you will notice that there is a lot of additional output. In order to hide and reduce the output to just the JSON data, use toJSON().

2. In your Terminal, run the app and create the record with npm start. You should see a similar JSON object in your console output:

{ id: 1,
title: 'Toy Story',
updatedAt: 2019-07-10T14:16:48.886Z,
createdAt: 2019-07-10T14:16:48.886Z }
Don't worry about all the statements displayed above the JSON for now. Those are the SQL statements that Sequelize generated and executed to store the record in the table.

Sequelize also added an id property and timestamps, with the createdAt and updatedAt properties. We'll review these in the next step, and test that the app and database are set up and working as expected.

