import request from "supertest";
import app from "../../app";

let user;

test("post/reg", async () => {
  const res = await request(app).post("/api/reg/").send({
    name: "Xx",
    surname: "Xx",
    email: "x2@gmail.com",
    pwd: "xx1",
  });
  user = { ...res.body[0], pwd: "xx1" };

  expect(res.statusCode).toBe(201);
  expect(res.body.length).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test("post/auth", async () => {
  const res = await request(app).post("/api/auth").send(user);

  expect(res.statusCode).toBe(201);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
  expect(res.body).toBeTruthy();
});

test("delete", async () => {
  const res = await request(app).delete(`/api/${user.id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
  expect(res.body).toBeTruthy();
  expect(res.body[0].id).toBe(user.id);
});
