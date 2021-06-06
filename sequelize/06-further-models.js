const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    title: Sequelize.STRING,
    runtime: { },
    releaseDate: { },
    isAvailableOnVHS: { },
  }, { sequelize });

  return Movie;
};


const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    title: {
      type: Sequelize.STRING
    },
    runtime: {
      type: Sequelize.INTEGER
    },
    releaseDate: {
      type: Sequelize.DATEONLY
    },
    isAvailableOnVHS: {
      type: Sequelize.BOOLEAN
    },
  }, { sequelize });

  return Movie;
};


const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    // Set custom primary key column
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING
    },
    ...
  }, { sequelize });

  return Movie;
};


module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false, // disallow null
    },
    runtime: {
      type: Sequelize.INTEGER,
      allowNull: false, // disallow null
    },
    releaseDate: {
      type: Sequelize.DATEONLY,
      allowNull: false, // disallow null
    },
    isAvailableOnVHS: {
      type: Sequelize.BOOLEAN,
      allowNull: false, // disallow null
    },
  }, { sequelize });

  return Movie;
};


module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    ...
    isAvailableOnVHS: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false, // set default value
    },
  }, { sequelize });

  return Movie;
};


const db = require('./db');
const { Movie } = db.models;

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({
      title: 'Toy Story',
      runtime: 81,
      releaseDate: '1995-11-22',
      isAvailableOnVHS: true,
    });
    console.log(movie.toJSON());

    const movie2 = await Movie.create({
      title: 'The Incredibles',
      runtime: 115,
      releaseDate: '2004-04-14',
      isAvailableOnVHS: true,
    });
    console.log(movie2.toJSON());

  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
