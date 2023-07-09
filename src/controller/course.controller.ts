import express, { Request, Response } from "express";
import { getUsers, createCourse, getCourseById, updateCourse, deleteCourse } from "../service/course.service";

const route = express.Router();

route.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getUsers();

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { course } = req.body;
    const data = await createCourse(course);

    res.status(201).send(data);
  } catch (error: any) {
    res.status(405).send(error.message);
  }
});

route.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getCourseById(id);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.put("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { course } = req.body;
    const data = await updateCourse(id, course);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await deleteCourse(id);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

export default route;
