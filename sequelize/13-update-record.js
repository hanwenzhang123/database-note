(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... All model instances

    const toyStory3 = await Movie.findByPk(3);

  } catch(error) {
    ...
  }
})();
  
  
  
  //save()
  (async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... All model instances

    const toyStory3 = await Movie.findByPk(3);
    toyStory3.isAvailableOnVHS = true;
    await toyStory3.save();

    console.log( toyStory3.get({ plain: true }) );

  } catch(error) {
    ...
  }
})();
    
    
    
    //update()
    
    (async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... All model instances

    const toyStory3 = await Movie.findByPk(3);
    await toyStory3.update({
      isAvailableOnVHS: true,
    });
    console.log( toyStory3.get({ plain: true }) );

  } catch(error) {
    ...
  }
})();
      
      
      
      
      (async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... All model instances

    const toyStory3 = await Movie.findByPk(3);
    await toyStory3.update({
      title: 'Trinket Tale 3', // new title
      isAvailableOnVHS: true,
    }, { }); 

    console.log( toyStory3.get({ plain: true }) );

  } catch(error) {
    ...
  }
})();
        
        
        
        
        
        (async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... All model instances

    const toyStory3 = await Movie.findByPk(3);
    await toyStory3.update({
      title: 'Trinket Tale 3', // this will be ignored
      isAvailableOnVHS: true,
    }, { fields: ['isAvailableOnVHS'] }); 

    console.log( toyStory3.get({ plain: true }) );

  } catch(error) {
    ...
  }
})();
