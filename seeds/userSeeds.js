const { User } = require("../models");

const userData = [
  {
    username: "evan",
    password: "password1",
  },
  {
    username: "ryan",
    password: "password2",
  },
  {
    username: "charlotte",
    password: "password3",
  },
  {
    username: "trevor",
    password: "password4",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
