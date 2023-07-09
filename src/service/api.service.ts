import bcrypt from "bcrypt";
import { createUserDB, getEmailDB } from "../repository/api.repository";

const salt = 10;

async function createUser(name: string, surname: string, email: string, pwd: string) {
  const foundEmail = await getEmailDB(email);

  if (foundEmail.length) throw new Error("user already exists");

  const hashedPwd = await bcrypt.hash(pwd, salt);

  const data = await createUserDB(name, surname, email, hashedPwd);

  if (!data.length) throw new Error("user not created");

  return data;
}

async function authorizationUser(email: string, pwd: string) {
  const findUser = await getEmailDB(email);

  if (!findUser.length) throw new Error("user not found");

  const bool = await bcrypt.compare(pwd, findUser[0].pwd);

  if (!bool) throw new Error("password doesn't match");

  return findUser;
}

export { createUser, authorizationUser };
