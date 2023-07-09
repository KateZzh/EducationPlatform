import { getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } from "../repository/user.repository";
import { iUser } from "../interfaces/index";

async function getAllUsers(): Promise<iUser[]> {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error("table is empty");

  return data;
}

async function getUserById(id: number) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error("id not found");

  return data;
}

async function updateUser(id: number, name: string, surname: string, email: string, pwd: string) {
  const data = await updateUserDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error("user doesn't update");

  return data;
}

async function deleteUser(id: number) {
  const data = await deleteUserDB(id);
  if(!data.length) throw new Error("user doesn't delete");

  return data;
}

export { getAllUsers, getUserById, updateUser, deleteUser };
