import { getUsersDB, createCourseDB, getCourseByIdDB, updateCourseDB, deleteCourseDB } from '../repository/course.repository';
import { iCourse } from '../interfaces';

async function getUsers(): Promise<iCourse[]> {
  const data = await getUsersDB();
  if (!data.length) throw new Error('table is empty');

  return data;
}

async function createCourse(course: string) {
  const data = await createCourseDB(course);
  if (!data.length) throw new Error("this object doesn't create");

  return data;
}

async function getCourseById(id: number) {
  const data = await getCourseByIdDB(id);
  if (!data.length) throw new Error('id not found');

  return data;
}

async function updateCourse(id: number, course: string) {
  const data = await updateCourseDB(id, course);
  if (!data.length) throw new Error("course doesn't update");

  return data;
}

async function deleteCourse(id: number) {
  const data = await deleteCourseDB(id);
  if (!data.length) throw new Error("course doesn't delete");

  return data;
}

export { getUsers, createCourse, getCourseById, updateCourse, deleteCourse };
