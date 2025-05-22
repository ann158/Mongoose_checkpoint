const Person = require('../models/Person');

const findOneByFood = (food) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.error(err);
    console.log("✅ Found by favorite food:", person);
  });
};

module.exports = () => findOneByFood('Pizza');
