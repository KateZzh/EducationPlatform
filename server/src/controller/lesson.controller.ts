import express, { Request, Response } from 'express';
import { getAllLesson, createLesson, updateLesson, deleteLesson, getLessonById } from '../service/lesson.service';
import buildResponse from '../helper/buildResponse';

const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    buildResponse(res, 200, await getAllLesson());
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { course_id, title } = req.body;

    buildResponse(res, 200, await createLesson(course_id, title));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { course_id, title } = req.body;

    buildResponse(res, 200, await updateLesson(req.params.id, course_id, title));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    buildResponse(res, 200, await deleteLesson(req.params.id));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:course_id', async (req: Request, res: Response): Promise<void> => {
  try {
    buildResponse(res, 200, await getLessonById(req.params.course_id));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
