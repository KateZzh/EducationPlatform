import express, { Request, Response } from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser, createUserTest } from '../service/user.service';
import buildResponse from '../helper/buildResponse';

const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    buildResponse(res, 200, await getAllUsers());
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    buildResponse(res, 200, await getUserById(req.params.id));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, surname, email, pwd } = req.body;

    buildResponse(res, 200, await updateUser(req.params.id, name, surname, email, pwd));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    buildResponse(res, 200, await deleteUser(req.params.id));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, surname, email, pwd } = req.body;

    buildResponse(res, 201, await createUserTest(name, surname, email, pwd));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
