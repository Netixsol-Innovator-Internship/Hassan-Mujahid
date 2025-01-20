import { v4 as uuidv4 } from "uuid";
import { validationResult } from "express-validator";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUsers = (req, res) => {
  const user = req.body;
  const errors = validationResult(req);
  const errorMessages = errors.array().map((err) => err.msg);
  const repeatedUser = users.find(
    (repeater) => repeater.firstName === user.firstName
  );
  if (repeatedUser) {
    return res.send(`User with the name ${user.firstName} already exists`);
  }

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errorMessages });
  }

  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added to the database!`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (user) {
    return res.send(user);
  } else {
    return res.send(`User with the id ${id} does not exist!`);
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (user) {
    users = users.filter((user) => user.id !== id);
  } else {
    return res.send(`User with the id ${id} does not exist!`);
  }

  res.send(`User with the id ${id} deleted from the database.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const errors = validationResult(req);
  const errorMessages = errors.array().map((err) => err.msg);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errorMessages });
  }
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.send(`User with the id ${id} does not exist!`);
  }
  const repeatedUser = users.find(
    (repeater) => repeater.firstName === firstName
  );
  if (repeatedUser && firstName) {
    return res.send(`User with the name ${user.firstName} already exists`);
  }
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;
  if (!firstName && !lastName && !age)
    return res.send("Please send at least one correct value to update!");

  res.send(`User with the id ${id} has been updated.`);
};
