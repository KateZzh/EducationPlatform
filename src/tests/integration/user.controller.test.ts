import request from 'supertest';
import app from '../../app';

let postID;

test('post', async () => {
  const res = await request(app).post('/user').send({ name: 'K', surname: 'Zh', email: 'kzh@gmail.com', pwd: '1111' });

  postID = res.body[0].id;

  expect(res.statusCode).toBe(201);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test('get', async () => {
  const res = await request(app).get('/user');

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test('getById', async () => {
  const res = await request(app).get(`/user/${postID}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
  expect(res.body[0].id).toBe(postID);
});

test('put', async () => {
  const res = await request(app).put(`/user/${postID}`).send({
    name: 'K',
    surname: 'Zh',
    email: 'kzh@gmail.com',
    pwd: '1234',
  });

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
  expect(res.body[0]).toEqual({ id: postID, name: 'K', surname: 'Zh', email: 'kzh@gmail.com', pwd: '1234' });
});

test('delete', async () => {
  const res = await request(app).delete(`/user/${postID}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
  expect(res.body[0].id).toBe(postID);
});
