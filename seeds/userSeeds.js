const { User } = require("../models");

const userData = [
  {
    username: "evan",
    email: "test1@test.com",
    password: "password1",
  },
  {
    username: "ryan",
    email: "test2@test.com",
    password: "password2",
  },
  {
    username: "charlotte",
    email: "test3@test.com",
    password: "password3",
  },
  {
    username: "trevor",
    email: "test4@test.com",
    password: "password4",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
