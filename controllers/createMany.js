const Person = require('../models/Person');

const arrayOfPeople = [
  { name: 'Mary', age: 25, favoriteFoods: ['Salad', 'Rice'] },
  { name: 'Tom', age: 32, favoriteFoods: ['Steak', 'Pasta'] },
  { name: 'Anna', age: 28, favoriteFoods: ['Pilau'] },
];

const createMany = () => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    console.log("✅ Many people created:", people);
  });
};

module.exports = createMany;
