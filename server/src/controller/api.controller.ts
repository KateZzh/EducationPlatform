import express, { Request, Response } from 'express';
import { createUser, authorizationUser, deleteUserTest } from '../service/api.service';
import buildResponse from '../helper/buildResponse';
import createToken from '../helper/jwt';

const route = express.Router();

route.post('/reg', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, surname, email, pwd } = req.body;

    buildResponse(res, 201, await createUser(name, surname, email, pwd));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/auth', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, pwd } = req.body;
    const data = await authorizationUser(email, pwd);
    const token = createToken(data);

    res.cookie('access_token', token, {
      httpOnly: false,
      secure: true,
    });

    buildResponse(res, 201, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    buildResponse(res, 200, await deleteUserTest(req.params.id));
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
