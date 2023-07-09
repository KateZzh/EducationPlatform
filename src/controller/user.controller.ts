import express, { Request, Response } from "express";
import { getAllUsers, getUserById, updateUser, deleteUser } from "../service/user.service";

const route = express.Router();

route.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllUsers();

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.put("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUser(id, name, surname, email, pwd);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

export default route;
