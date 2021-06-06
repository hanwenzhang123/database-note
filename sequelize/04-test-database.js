Executing (default): DROP TABLE IF EXISTS `Movies`;
Executing (default): CREATE TABLE IF NOT EXISTS `Movies` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `title` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`Movies`)
Executing (default): INSERT INTO `Movies` (`id`,`title`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3);

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  logging: false // disable logging
});

...

(async () => {
  await sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({
      title: 'Toy Story'
    });
    console.log(movie.toJSON());

    // New entry
    const movie2 = await Movie.create({
      title: 'The Incredibles'
    });  
    console.log(movie2.toJSON());

  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();


(async () => {
  await sequelize.sync({ force: true });

  try {
    await Movie.create({    //using create
      title: 'Toy Story'
    });

    await Movie.create({
      title: 'The Incredibles'
    });  

  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();


(async () => {
  await sequelize.sync({ force: true });

  try {
    const movieInstances = await Promise.all([    //Using Promise.all()
      Movie.create({
        title: 'Toy Story'
      }),
      Movie.create({
        title: 'The Incredibles'
      }),
    ]);
    const moviesJSON = movieInstances.map(movie => movie.toJSON());
    console.log(moviesJSON);

  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();

he Promise.all() method returns one fulfilled promise containing all of the Movie instances, which gets stored in the movieInstances variable. 
