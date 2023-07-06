import {
  getUsersDB,
  createCourseDB,
  getCourseByIdDB,
} from "../repository/course.repository";
import iCourse from "../interfaces";

async function getUsers(): Promise<iCourse[]> {
  const data = await getUsersDB();
  if (!data.length) throw new Error("table is empty");

  return data;
}

async function createCourse(course: iCourse[]) {
  const data = await createCourseDB(course);
  if (!data.length) throw new Error("this object doesn't create");

  return data;
}

async function getCourseById(id: iCourse[]) {
  const data = await getCourseByIdDB(id);
  if (!data.length) throw new Error("id not found");

  return data;
}

export { getUsers, createCourse, getCourseById };
