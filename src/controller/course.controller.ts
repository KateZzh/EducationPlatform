import express, { Request, Response } from "express";
import {
  getUsers,
  createCourse,
  getCourseById,
  updateCourse,
} from "../service/course.service";
import iCourse from "../interfaces";

const route = express.Router();

route.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const data: iCourse[] = await getUsers();

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { course } = req.body;
    const data: iCourse[] = await createCourse(course);

    res.status(201).send(data);
  } catch (error: any) {
    res.status(405).send(error.message);
  }
});

route.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data: iCourse[] = await getCourseById(id);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.put("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { course } = req.body;
    const data: iCourse[] = await updateCourse(id, course);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

export default route;
