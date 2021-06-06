...

(async () => {
  await db.sequelize.sync({ force: true });

  try {
   ...

  } catch (error) {
    if {

    } else {

    }
  }
})();
  
  
  
  ...

(async () => {
  await db.sequelize.sync({ force: true });

  try {
   ...

  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {

    }
  }
})();
    
    
    
    ...

(async () => {
  await db.sequelize.sync({ force: true });

  try {
   ...

  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
      throw error;
    }
  }
})();

      
      
      
      
      
