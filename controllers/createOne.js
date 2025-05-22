const Person = require("../models/Person");

const createOne = async () => {
  try {
    const person = new Person({
      name: "John",
      age: 30,
      favoriteFoods: ["Pizza"]
    });

    const savedPerson = await person.save();
    console.log("✅ Person created:", savedPerson);
  } catch (err) {
    console.error("❌ Error creating person:", err.message);
  }
};

module.exports = createOne;
