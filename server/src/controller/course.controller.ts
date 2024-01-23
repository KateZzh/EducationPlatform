import express, { Request, Response } from 'express';
import { getUsers, createCourse, getCourseById, updateCourse, deleteCourse } from '../service/course.service';
import buildResponse from '../helper/buildResponse';

const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    buildResponse(res, 200, await getUsers());
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { course, description } = req.body;

    buildResponse(res, 201, await createCourse(course, description));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    buildResponse(res, 200, await getCourseById(req.params.id));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { course, description } = req.body;

    buildResponse(res, 200, await updateCourse(req.params.id, course, description));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', async (req: Request, res: Response) => {
  try {
    buildResponse(res, 200, await deleteCourse(req.params.id));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
