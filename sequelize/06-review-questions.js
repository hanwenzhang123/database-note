Which method do you use to initialize and configure a model?
  .init()

Models map JavaScript objects to relational database tables.
  True. Models specify instructions for Sequelize that define how data should be stored using objects.

Please fill in the correct answer in each blank provided below.
Complete the code below by adding the data type that prevents empty strings when creating a model instance:
Car.init({
  Make: {
    type: Sequelize._STRING__
  },
}, { sequelize });


Complete the code by adding the property that specifies a validation object:
Car.init({
  make: {
    type: Sequelize.STRING,
    allowNull: false,
    _validate__: {
      notEmpty: true
    },
  },
}, { sequelize });


Complete the code by adding the property that sets a custom message when validation fails:
Car.init({
  make: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        __msg__: 'Please provide a value for "make"'
      }
    },
  },
}, { sequelize });
