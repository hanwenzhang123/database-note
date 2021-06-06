module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    // Attributes object
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ...
  }, 
  // Model options object
  { 
    timestamps: false, // disable timestamps
    sequelize 
  });

  return Movie;
};




module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    // Attributes object
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ...
  }, 
  // Model options object
  { 
    freezeTableName: true, // disable plural table names
    sequelize 
  });

  return Movie;
};





module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    // Attributes object
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ...
  }, 
  // Model options object
  {
    modelName: 'movie', // set model name to 'movie'; table name will be 'movies'
    sequelize 
  });

  return Movie;
};




module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    // Attributes object
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ...
  }, 
  // Model options object
  { 
    tableName: 'my_movies_table', // table name change
    sequelize 
  });

  return Movie;
};



const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  // global options
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});
