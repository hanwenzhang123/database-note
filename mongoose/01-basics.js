https://mongoosejs.com/
https://mongoosejs.com/docs/api/model.html

Object Data Modeling (ODM)
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node
It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.


//mongodb://localhost:27017/{name of the database}
//Models are defined by passing a Schema instance to mongoose.model


//from the web
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });    //mongoose.model('MyModel', mySchema);

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


//fruit example
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({    // a new schema (blueprint)
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);    //auto convert to plural for collection and drop to lower case

const fruit = new Fruit ({  //create this document from the model we specified above
  name: 'Apple', 
  rating: 7,
  review: 'pretty solid as a fruit'
});
  
//fruit.save();   //everytime you run fruit.save(), it will save all data in the fruit, maybe the same entry

const kiwi = new Fruit ({ 
  name: 'Kiwi', 
  rating: 10,
  review: 'the best fruit'
});

const orange = new Fruit ({ 
  name: 'Orange', 
  rating: 4,
  review: 'too sour for me'
});

const banana = new Fruit ({ 
  name: 'Banana', 
  rating: 3,
  review: 'weird texture'
});

Fruit.insertMany();   //in order to save them in bulk


//human example
const personSchema = new mongoose.Schema ({ 
  name: String,
  age: Number
});

const Person = mongoose.moodel('Person', personSchema);

const person = new person ({
  name: 'John',
  age: 37
});

person.save();

  
