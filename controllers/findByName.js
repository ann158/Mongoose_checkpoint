const Person = require('../models/Person');

const findByName = (name) => {
  Person.find({ name }, (err, people) => {
    if (err) return console.error(err);
    console.log("✅ People found:", people);
  });
};

module.exports = () => findByName('Mary');
