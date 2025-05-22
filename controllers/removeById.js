const Person = require('../models/Person');

const removeById = (id) => {
  Person.findByIdAndRemove(id, (err, removed) => {
    if (err) return console.error(err);
    console.log("✅ Person removed:", removed);
  });
};

module.exports = () => removeById('replace_with_id');
