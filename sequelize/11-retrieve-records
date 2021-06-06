The method findByPk() (or 'find by primary key') 
In app.js, initialize a new variable named movieById to await Movie.findByPk():

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... all model instances

    const movieById = await Movie.findByPk();
    console.log(movieById.toJSON());

  } catch(error) {
    ...
  }
})();

Retrieve a movie by passing findByPk() a known ID:

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... All model instances

    const movieById = await Movie.findByPk(1);
    console.log(movieById.toJSON());

  } catch(error) {
    ...
  }
})();



await Movie.findOne():

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... All model instances

    const movieByRuntime = await Movie.findOne();

  } catch(error) {
    ...
  }
})();

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... All model instances

    const movieByRuntime = await Movie.findOne({ where: { runtime: 115 } });
    console.log(movieByRuntime.toJSON());

  } catch(error) {
    ...
  }
})();



#findAll()

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... All model instances

    const movies = await Movie.findAll();
    console.log( movies.map(movie => movie.toJSON()) );

  } catch(error) {
    ...
  }
})();


(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... All model instances

    const movies = await Movie.findAll();
    console.log( movies.map(movie => movie.toJSON()) );

  } catch(error) {
    ...
  }
})();


const people = await Person.findAll({
  where: {
    lastName: 'Hanks'
  }
});
// SELECT * FROM People WHERE lastName = 'Hanks';
console.log( people.map(person => person.toJSON()) );



const movies = await Movie.findAll({
  where: {
    runtime: 92,
    isAvailableOnVHS: true
  }
});
// SELECT * FROM Movies WHERE runtime = 92 AND isAvailableOnVHS = true;
console.log( movies.map(movie => movie.toJSON()) );
