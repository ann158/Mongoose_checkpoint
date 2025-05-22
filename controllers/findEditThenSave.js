const Person = require('../models/Person');

const findEditThenSave = (id) => {
  Person.findById(id, (err, person) => {
    if (err) return console.error(err);

    person.favoriteFoods.push("hamburger");

    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      console.log("✅ Updated person:", updatedPerson);
    });
  });
};

module.exports = () => findEditThenSave('replace_with_id');
