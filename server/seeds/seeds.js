const mongoose = require('mongoose');
const User = require('./path/to/User/model');

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });

const seedUsers = [
  {
    name: 'SuperMario',
    firstLastName: 'Mario Mario',
    email: 'marioletsgo@gmail.com',
    password: 'password1',
  },
  {
    name: 'SpyrotheDragon',
    firstLastName: 'Spyro Dragon',
    email: 'dragonsparx@yahoo.com',
    password: 'password2',
  },
];

User.insertMany(seedUsers)
  .then(() => {
    console.log('Data inserted')
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error:', error)
  });