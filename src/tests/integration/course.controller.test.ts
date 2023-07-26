import request from 'supertest';
import app from '../../app';

let postID;

test('post', async () => {
  const res = await request(app).post('/course/').send({ course: 'js' });

  postID = res.body[0].id;

  expect(res.statusCode).toBe(201);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test('get', async () => {
  const res = await request(app).get('/course/');

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test('getById', async () => {
  const res = await request(app).get(`/course/${postID}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
  expect(res.body[0].id).toBe(postID);
});

test('put', async () => {
  const res = await request(app).put(`/course/${postID}`).send({ id: postID, course: 'c++' });

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
  expect(res.body[0]).toEqual({ id: postID, course: 'c++' });
});

test('delete', async () => {
  const res = await request(app).delete(`/course/${postID}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});
