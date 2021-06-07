Sequelize refers to data relationships as:
associations


Complete the code below by adding the Sequelize method that associates an author with one or more books:
Author.associate = (models) => {
  Author.hasMany(models.Book);
};


Complete the code below by adding the Sequelize method that associates a book with only one author (one-to-one relationship):
Book.associate = (models) => {
  Book.belongsTo(models.Author);
};


Complete the code below by adding the property that will not allow a null authorId:
Book.associate = (models) => {
  Book.belongsTo(models.Author, {
    foreignKey: {
      fieldName: 'authorId',
      allowNull: false
    },
  });
};


In the following associations, add the property that customizes the foreign key name:
// models/book.js
Book.associate = (models) => {
  Book.belongsTo(models.Author, { foreignKey: 'authorId' });
};
// models/author.js
Author.associate = (models) => {
  Author.hasMany(models.Book, { foreignKey: 'authorId' });
};
 


When converting an instance or collection of instances to JSON, calling .get({ plain: true}) returns the same as calling .
toJSON() – a plain object with just the model attributes and values.



Which of the following Sequelize methods tests your database connection?
  sequelize.authenticate()


Complete the code by adding the Sequelize method that builds and saves a new book record in the database:
Book.create({
  title: 'Jazz',
  releaseYear: 1992,
  authorId: 12
}),
  
  
Complete the following code by adding the Sequelize method that queries the entire Book table.
const books = await Book.findAll();


Complete the query below by adding the property that indicates that you want to return related Author model data:
const books = await Books.findAll({
  include: [{
      model: Author
    }],
});


Which Sequelize property lets you define an alias for a model association?
  AS


Complete the following code to define a 'biographer' alias for the model association:
Book.associate = (models) => {
  Book.belongsTo(models.Author, {
    as: 'biographer', // alias
    foreignKey: {
      fieldName: 'authorId',
      allowNull: false,
    },
  });
};


Player.associate = (models) => {
  Player.belongsTo(models.Team);
};
The above code creates what type of association between a Player and Team model?
  One-to-one

   
