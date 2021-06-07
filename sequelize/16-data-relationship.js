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
 
