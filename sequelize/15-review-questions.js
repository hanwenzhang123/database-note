Which method builds a non-persistent model instance?
  .build()


When using the build() method, you must call ____ to store an instance in the database.
.save()


Which method automatically stores your instance data once called?
.create()


Which finder method retrieves a single instance by its primary key (or id) value?
  findByPk()



Which method deletes a record from the database?
  destroy()


Please fill in the correct answer in each blank provided below.

Consider the following SQL query:
SELECT * FROM Books WHERE author = 'Sylvia Plath';

Add the code that will execute the same query shown above:
await Book.({
  where: {
    author: 'Sylvia Plath'
  }
});


Complete the code to return only the title, author, and publishDate of all books authored by J. K. Rowling. The order of the results should be based on publish dates, in descending order.

await Book.findAll({
  attributes: ['title', 'author', 'publishDate'],
  where: {
    author: 'J. K. Rowling'
  },
 order: [['publishDate', 'DESC']]
});

 
