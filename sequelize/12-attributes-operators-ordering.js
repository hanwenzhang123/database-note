(async () => {
  await db.sequelize.sync({ force: true });

  try {

    // ... All model instances

    const movies = await Movie.findAll({
      attributes: ['id', 'title'], // return only id and title
      where: {
        isAvailableOnVHS: true,
      },
    });
    console.log( movies.map(movie => movie.toJSON()) );

  } catch(error) {
    ...
  }
})();
  
  
  
  [ { id: 1, title: 'Toy Story' },
  { id: 2, title: 'The Incredibles' },
  { id: 3, title: 'Toy Story 2' } ]

  
  
  const db = require('./db');
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;
...




(async () => {
  await db.sequelize.sync({ force: true });

  try {

    // ... All model instances

    const movies = await Movie.findAll({
      attributes: ['id', 'title'],
      where: {
        releaseDate: {
          [Op.gte]: '2004-01-01' // greater than or equal to the date
        }
      },
    });
    console.log( movies.map(movie => movie.toJSON()) );

  } catch(error) {
    ...
  }
})();
  
  
  
  
  
  (async () => {
  await db.sequelize.sync({ force: true });

  try {

    // ... All model instances

    const movies = await Movie.findAll({
      attributes: ['id', 'title'],
      where: {
        releaseDate: {
          [Op.gte]: '2004-01-01', // greater than or equal to the date
        }
        runtime: {
          [Op.gt]: 95, // greater than 95
        },
      },
    });
    console.log( movies.map(movie => movie.toJSON()) );

  } catch(error) {
    ...
  }
})();
    
    
    
    
    
    
    
    const movies = await Movie.findAll({
  attributes: ['id', 'title'],
  where: {
    title: {
      [Op.endsWith]: 'story'
    },        
  },
  order: [['id', 'DESC']] // IDs in descending order
});
console.log( movies.map(movie => movie.toJSON()) );
    
    
    
    
    
    
    const movies = await Movie.findAll({
  attributes: ['id', 'title', 'releaseDate'],
  where: {
    releaseDate: {
      [Op.gte]: '1995-01-01'
    }
  },
  order: [['releaseDate', 'ASC']], // dates in ascending order
});
console.log( movies.map(movie => movie.toJSON()) );
