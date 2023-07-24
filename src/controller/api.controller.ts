import express, { Request, Response } from "express";
import {
  createUser,
  authorizationUser,
  deleteUser,
} from "../service/api.service";
import buildResponse from "../helper/buildResponse";

const route = express.Router();

route.post("/reg", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    buildResponse(res, 201, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post("/auth", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, pwd } = req.body;
    const data = await authorizationUser(email, pwd);

    buildResponse(res, 201, data);
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

export default route;
