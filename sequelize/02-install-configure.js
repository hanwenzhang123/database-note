Install and Configure Sequelize and SQLite

Getting Started
Let's get started by setting up the Node.js project.

1. Create your project folder. You may name it anything, for example: sql-orms-with-node.
2. Using your Terminal or console app, navigate to your project folder.
3. Use npm to initialize your project. Run the following command to quickly generate a package.json file with all the defaults:
npm init -y
4. Add an app.js file to your project. You will start to write code in this file soon.
5. Open the package.json file in your text editor. Add a start script to the scripts section as shown below:

"scripts": {
  "start": "node app.js"
}

6. Set the entry point to your program. In package.json, set the main property to app.js:

"main": "app.js",
"scripts": {
  "start": "node app.js"
},
  
Your package.json file should look similar to this:

{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
  }
}

Next, you'll get Sequelize and SQLite installed and configured in your project.


Install Sequelize
You're going to use the Sequelize ORM in your project, one of the most popular ORMs for Node.js. 
Sequelize is available via npm (or yarn).

In your Terminal, or console, run the following command to install Sequelize with npm:
npm install --save sequelize@^5.10.1

Install SQLite
In this course, we'll use the SQLite relational database management system (RDBMS). 
SQLite creates a simple, lightweight database as a single file stored in your project.

Run the following command to install the version of sqlite3 used in this course:
npm install --save sqlite3@^4.0.9


Configure Sequelize and Connect to the Database
The "Getting Started" section of the Sequelize docs provides a good reference and code you can use to configure Sequelize and connect to a database.

In this step, you'll start by writing all of your code in the app.js file. Then in subsequent steps, you'll improve your project layout by moving all database related and model code into their respective folders and files.


Create a Sequelize instance
To get started with Sequelize, you need to create a database instance connected to a SQLite database.

1. Include Sequelize in your program. Require the 'sequelize' module:
const Sequelize = require('sequelize');

2. Connect to a SQLite database. Sequelize uses a constructor function to connect to your database. Instantiate Sequelize by initializing a variable named sequelize to the Sequelize() constructor:
const Sequelize = require('sequelize');
const sequelize = new Sequelize();

The variable sequelize now holds a Sequelize instance you can interact with. You initialize the database connection by passing the Sequelize() constructor an object with connection parameters.

3. Pass the Sequelize() constructor an object with the parameters dialect and storage:
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db'
});

The dialect parameter specifies the specific version of SQL you're using (the SQL dialect of the database), which in this case it's sqlite. Since SQLite is a file-based database that doesn't require credentials or a host, you use the storage key to specify the file path or the storage engine for SQLite. The value 'movies.db' will create a database in your project named 'movies'.


Test the Connection
As you learned in the first video of this course, Sequelize uses Promises to manage asynchronous control-flow, or the order in which its function calls are executed and evaluated. Promises in JavaScript offer a more elegant and human-readable way to manage asynchronous code.

In this course, we're going to use the ES2017 async/await syntax for all asynchronous calls made with Sequelize. We'll keep things really simple by executing the Sequelize methods used to create and retrieve data from the database within an async immediately invoked function expression (IIFE).

1. Define the async function. Below the sequelize variable, write an IIFE that's tagged with the keyword async:

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db'
});

// async IIFE
(async () => {

})();

The keyword async defines an asynchronous function. Inside the function we'll use a try...catch statement to catch all exceptions that are thrown.

Note: try/catch consists of two main blocks: try and catch. try contains all the code that needs to be executed, and any code inside catch will be executed if an exception is thrown in the try block.

2. Add try...catch blocks inside the function. Make sure that you pass catch() an error parameter which will contain the details about an error:

const Sequelize = require('sequelize');

const sequelize = new Sequelize({...});

// async IIFE
(async () => {
  try {

  } catch (error) {

  }
})();
Inside an async function, you use the await keyword to wait for a Promise. For example, Sequelize's authenticate() function returns a promise that resolves to a successful, authenticated connection to the database.

3. Test the connection. Inside the try block, add await sequelize.authenticate() to test that the connection is OK and you can connect to the database:

...

(async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {

  }
})();

4. Inside the try block, log a "success" message to the console. In the catch block, use console.error() to print an 'error' message displaying the error:

...

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database successful!');
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();



Test Your Application
In your Terminal, run the app with npm start. You should see the following message in the console output:
Connection to the database successful!
  
In your project files, there should be a new file named movies.db -- that's your SQLite database.


 
