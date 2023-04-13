import { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
let users: any[] = [];

export const getUsers = (req: Request, res: Response) => {
  res.send(users);
};

export const addNewUser = (req: Request, res: Response) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added to the database! `);
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params; // toto je id na urlke
  const foundUser = users.find((user) => user.id == id); // a toto je zober moje pole
  // a najdi v nom id a to id bude rovné id tej urlke a ulož to do konštanty ktorú potom vypíšeš
  res.send(foundUser);
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database.`);
};

export const changeUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;
  res.send(`User with the id ${id} has been updated`);
};
