import { db } from "./db";

export const getUsers = () => db.getUsers();

export const loginUser = ({ nickname, password }) => db.findUser(nickname, password);

export const registerUser = ({ nickname, password }) =>
  db.addUser(nickname, password);
