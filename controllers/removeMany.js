const Person = require('../models/Person');

const removeMany = () => {
  Person.remove({ name: 'Mary' }, (err, result) => {
    if (err) return console.error(err);
    console.log("✅ Removed people:", result);
  });
};

module.exports = removeMany;
