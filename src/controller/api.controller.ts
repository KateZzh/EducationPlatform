import express, { Request, Response } from "express";
import { createUser, authorizationUser } from "../service/api.service";

const route = express.Router();

route.post("/reg", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    res.status(201).send(data);
  } catch (error: any) {
    res.status(405).send(error.message);
  }
});

route.post("/auth", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, pwd } = req.body;
    const data = await authorizationUser(email, pwd);

    res.status(201).send(data);
  } catch (error: any) {
    res.status(405).send(error.message);
  }
});

export default route;