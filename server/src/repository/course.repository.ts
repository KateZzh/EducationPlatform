import { pool } from '../db';
import { iCourse } from '../interfaces';

async function getUsersDB(): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = 'select * from courses';
  const data = (await client.query(sql)).rows;

  return data;
}

async function createCourseDB(course: string, description: string): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = 'insert into courses (course, description) values ($1, $2) returning *';
  const data = (await client.query(sql, [course, description])).rows;

  return data;
}

async function getCourseByIdDB(id: number): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = 'select * from courses where id = $1';
  const data = (await client.query(sql, [id])).rows;

  return data;
}

async function updateCourseDB(id: number, course: string, description: string): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = 'update courses set course = $1 description = $2 where id = $3 returning *';
  const data = (await client.query(sql, [course, description, id])).rows;

  return data;
}

async function deleteCourseDB(id: number) {
  const client = await pool.connect();

  const sql = 'delete from courses where id = $1 returning *';
  const data = (await client.query(sql, [id])).rows;

  return data;
}

export { getUsersDB, createCourseDB, getCourseByIdDB, updateCourseDB, deleteCourseDB };
