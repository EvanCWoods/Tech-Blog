const { Post } = require("../models");

const postData = [
  {
    title: "Test 1",
    content: "This is the first test",
    user_id: 1,
  },
  {
    title: "Test 2",
    content: "This is the second test",
    user_id: 2,
  },
  {
    title: "Test 3",
    content: "This is the third test",
    user_id: 3,
  },
  {
    title: "Test 4",
    content: "This is the fourth test",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
