import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Pretty Solid as a fruit.",
// });

// fruit.save();

// mongoose.connect("mongodb://localhost:27017/employeeDB", {
//   useNewUrlParser: true,
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("employee", personSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 9,
//   review: "Great fruit",
// });

// const Employee = Person.create({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple,
// });

// Fruit.insertMany([kiwi, orange, banana]);

const plum = new Fruit({
  name: "Plum",
  rating: 10,
  review: "My best fruit",
});

const newPrson = await Person.updateOne(
  { _id: "6403d778186f48ae3dcb29ae" },
  { favouriteFruit: plum }
);
console.log(newPrson);

const arr = await Fruit.find();
mongoose.connection.close();
arr.forEach((fruit) => {
  console.log(fruit.name);
});

// const res = await Fruit.updateOne(
//   { _id: "6403c92f3c106897760ee96a" },
//   { name: "Peach" }
// );

// const del2 = await Person.deleteMany({
//   name: "John",
// });
