(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // All model instances... 

    // Find a record
    const toyStory = await Movie.findByPk(1);

    // Find and log all movies
    const movies = await Movie.findAll();
    console.log( movies.map(movie => movie.toJSON()) );

  } catch(error) {
    ...
  }
})();
  
  
  
  (async () => {
  await db.sequelize.sync({ force: true });

  try {
    // All model instances... 

    // Find a record
    const toyStory = await Movie.findByPk(1);

    // Delete a record
    await toyStory.destroy();

    // Find and log all movies
    const movies = await Movie.findAll();
    console.log( movies.map(movie => movie.toJSON()) );

  } catch(error) {
    ...
  }
})();
    
    
    
    
    module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    id: {...},
    title: {...},
    runtime: {...},
    releaseDate: {...},
    isAvailableOnVHS: {...},
  }, { 
    paranoid: true, // enable "soft" deletes
    sequelize 
  });

  return Movie;
};
