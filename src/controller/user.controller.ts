import express, { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUserTest,
} from "../service/user.service";
import buildResponse from "../helper/buildResponse";

const route = express.Router();

route.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllUsers();

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.put("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUser(id, name, surname, email, pwd);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUserTest(name, surname, email, pwd);

    buildResponse(res, 201, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
