const movie = await Movie.create({
  title: '',
  runtime: -81,
  releaseDate: '1800-01-01',
  isAvailableOnVHS: true,
});



const Sequelize = require('sequelize');

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
      allowNull: false,
      validate: { },
    },
    runtime: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { },
    },
    releaseDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: { },
    },
    ...
  }, { sequelize });

  return Movie;
};



const Sequelize = require('sequelize');

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
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    ...
  }, { sequelize });

  return Movie;
};



const Sequelize = require('sequelize');

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
      allowNull: false,
      validate: {
        notEmpty: {
          // custom error message
          msg: 'Please provide a value for "title"',
        }
      },
    },
    ...

  }, { sequelize });

  return Movie;
};


const Sequelize = require('sequelize');

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
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "title"',
        },
        notEmpty: {
          msg: 'Please provide a value for "title"',
        },
      },
    },
    runtime: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "runtime"',
        }
      },
    },
    releaseDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "releaseDate"',
        }
      },
    },
    ...
  }, { sequelize });

  return Movie;
};


Inside the validate object of runtime, add the min property and set it to an object. The min validator checks that a number value is greater than or equal to a given number:

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    ...
    runtime: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "runtime"',
        },
        min: { 

        },
      },
    },
    ...
  }, { sequelize });

  return Movie;
};
Inside the min object, add the properties args and msg. Set args to 1, and msg to the custom error message shown below:

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    ...
    runtime: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "runtime"',
        },
        min: {
          args: 1,
          msg: 'Please provide a value greater than "0" for "runtime"',
        },
      },
    },
    ...
  }, { sequelize });

  return Movie;
};

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    ...
    runtime: {...},
    releaseDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "releaseDate"',
        },
        isAfter: {

        },
      },
    },
    ...
  }, { sequelize });

  return Movie;
};
             
             
             
module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    ...
    runtime: {...},
    releaseDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "releaseDate"',
        },
        isAfter: {
          args: '1895-12-27',
          msg: 'Please provide a value on or after "1895-12-28" for "releaseDate"',
        },
      },
    },
    ...
  }, { sequelize });

  return Movie;
};
