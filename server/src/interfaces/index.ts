interface iCourse {
  id: number;
  course: string;
  description: string;
}

interface iUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  pwd: string;
}

interface iLesson {
  id: number;
  course_id: number;
  title: string;
}

export { iCourse, iUser, iLesson };
