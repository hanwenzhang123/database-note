Sequelize refers to data relationships as:
associations

Complete the code below by adding the Sequelize method that associates an author with one or more books:
Author.associate = (models) => {
  Author.(models.Book);
};


Complete the code below by adding the Sequelize method that associates a book with only one author (one-to-one relationship):

Book.associate = (models) => {
  Book.belongsTo(models.Author);
};
