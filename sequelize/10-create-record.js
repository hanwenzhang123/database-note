Call build() on the model.

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({...});
    console.log(movie.toJSON());

    const movie2 = await Movie.create({...});
    console.log(movie2.toJSON());

    const person = await Person.create({...});
    console.log(person.toJSON());

    // New instance
    const movie3 = await Movie.build({
      title: 'Toy Story 3',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    console.log(movie3.toJSON());

  } catch (error) {
    ...
  }
})();


  
  Store the record in the database. Call the save() method on movie
  
  (async () => {
  await db.sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({...});
    console.log(movie.toJSON());

    const movie2 = await Movie.create({...});
    console.log(movie2.toJSON());

    const person = await Person.create({...});
    console.log(person.toJSON());

    // New instance
    const movie3 = await Movie.build({
      title: 'Toy Story 3',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    await movie3.save(); // save the record
    console.log(movie3.toJSON());

  } catch (error) {
    ...
  }
})();
    
    
    
    const person = await Person.create({
  firstName: 'Tom',
  lastName: 'Hanks',
}); // person is stored in the database

const person2 = await Person.build({
  firstName: 'Brad',
  lastName: 'Bird',
}); // person2 is not stored in the database yet
await person2.save(); // person2 is now stored in the database
    
    
    
    
    const movie3 = await Movie.build({
  title: 'Toy Story 3',
  runtime: 103,
  releaseDate: '2010-06-18',
  isAvailableOnVHS: false,
});

movie3.title = 'Updated Title';
await movie3.save();
// title: 'Updated Title' is stored in the database
