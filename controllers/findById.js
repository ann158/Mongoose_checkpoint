const Person = require('../models/Person');

const findById = (id) => {
  Person.findById(id, (err, person) => {
    if (err) return console.error(err);
    console.log("✅ Found by ID:", person);
  });
};

module.exports = () => findById('replace_with_id');
