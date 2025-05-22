const Person = require('../models/Person');

const queryChain = () => {
  Person.find({ favoriteFoods: "burritos" })
    .sort({ name: 1 })
    .limit(2)
    .select("-age")
    .exec((err, data) => {
      if (err) return console.error(err);
      console.log("✅ Query results:", data);
    });
};

module.exports = queryChain;
