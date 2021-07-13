const { User } = require("../models");

const userData = [
  {
    username: "Kyle",
    twitter: "kyle",
    github: "kyle",
    email: "kyle@kyle.com",
    password: "password5",
  },
  {
    username: "ted",
    twitter: "ted",
    github: "ted",
    email: "ted@ted.com",
    password: "password4",
  },
  {
    username: "paige",
    twitter: "paige",
    github: "paige",
    email: "paige@paige.com",
    password: "password3",
  },
  {
    username: "quinn",
    twitter: "quinn",
    github: "quinn",
    email: "quinn@quinn.com",
    password: "password2",
  },
  {
    username: "olive",
    twitter: "olive",
    github: "olive",
    email: "olive@olive.com",
    password: "password1",
  },
  {
    username: "charlie",
    twitter: "charlie",
    github: "charlie",
    email: "charlie@charlie.com",
    password: "password0",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
