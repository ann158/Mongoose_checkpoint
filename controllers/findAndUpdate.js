const Person = require('../models/Person');

const findAndUpdate = (name) => {
  Person.findOneAndUpdate(
    { name },
    { age: 20 },
    { new: true },
    (err, updated) => {
      if (err) return console.error(err);
      console.log("✅ Person updated:", updated);
    }
  );
};

module.exports = () => findAndUpdate('Mary');
