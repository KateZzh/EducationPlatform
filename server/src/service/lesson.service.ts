import { getAllLessonDB, createLessonDB, updateLessonDB, deleteLessonDB, getLessonByIdDB } from '../repository/lesson.repository';
import { iLesson } from '../interfaces';

async function getAllLesson(): Promise<iLesson[]> {
  const data = await getAllLessonDB();

  return data;
}

async function createLesson(course_id: number, title: string) {
  const data = await createLessonDB(course_id, title);

  return data;
}

async function updateLesson(id: number, course_id: number, title: string) {
  const data = await updateLessonDB(id, course_id, title);

  return data;
}

async function deleteLesson(id: number) {
  const data = await deleteLessonDB(id);

  return data;
}

async function getLessonById(id: number) {
  const data = await getLessonByIdDB(id);

  return data;
}

export { getAllLesson, createLesson, updateLesson, deleteLesson, getLessonById };
