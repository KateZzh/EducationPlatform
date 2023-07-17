import {
  getUsers,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../../../service/course.service";
import * as repository from "../../../repository/course.repository";

describe("", () => {
  test("", async () => {
    const mock = jest.spyOn(repository, "getUsersDB");
    mock.mockResolvedValue([
      { id: 1, course: "test1" },
      { id: 2, course: "test2" },
    ]);

    const res = await getUsers();

    expect(mock).toHaveBeenCalled();
    expect(res.length).toBeGreaterThan(0);
    expect(res).toEqual([
      { id: 1, course: "test1" },
      { id: 2, course: "test2" },
    ]);
  });

  test("", async () => {
    const mock = jest.spyOn(repository, "getUsersDB");
    mock.mockResolvedValue([]);

    try {
      await getUsers();
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe("table is empty");
    }
  });
});

describe("", () => {
  test("", async () => {
    const repFunc = jest.spyOn(repository, "getCourseByIdDB");
    repFunc.mockResolvedValue([{ id: 1, course: "test1" }]);

    const res = await getCourseById(1);

    expect(repFunc).toHaveBeenCalled();
    expect(repFunc).toHaveBeenCalledWith(1);

    expect(res.length).toBe(1);
    expect(res).toHaveLength(1);
    expect(res).toEqual([{ id: 1, course: "test1" }]);
  });

  test("", async () => {
    const repFunc = jest.spyOn(repository, "getCourseByIdDB");
    repFunc.mockResolvedValue([]);

    try {
      await getCourseById(1);
    } catch (error: any) {
      expect(repFunc).toHaveBeenCalled();
      expect(error.message).toBe("id not found");
    }
  });
});

describe("", () => {
  test("", async () => {
    const repFunc = jest.spyOn(repository, "createCourseDB");
    repFunc.mockResolvedValue([{ id: 1, course: "test1" }]);

    const res = await createCourse("test1");

    expect(repFunc).toHaveBeenCalled();
    expect(repFunc).toHaveBeenCalledWith("test1");

    expect(res).toEqual([{ id: 1, course: "test1" }]);
    expect(res).toHaveLength(1);
  });

  test("", async () => {
    const repFunc = jest.spyOn(repository, "createCourseDB");
    repFunc.mockResolvedValue([]);

    try {
      await createCourse("test");
    } catch (error: any) {
      expect(repFunc).toHaveBeenCalled();
      expect(error.message).toBe("this object doesn't create");
    }
  });
});

describe("", () => {
  test("", async () => {
    const repFunc = jest.spyOn(repository, "updateCourseDB");
    repFunc.mockResolvedValue([{ id: 1, course: "test3" }]);

    const res = await updateCourse(1, "test3");

    expect(repFunc).toHaveBeenCalled();

    expect(res).toEqual([{ id: 1, course: "test3" }]);
    expect(res).toHaveLength(1);
  });

  test("", async () => {
    const repFunc = jest.spyOn(repository, "updateCourseDB");
    repFunc.mockResolvedValue([]);

    try {
      await updateCourse(1, "test3");
    } catch (error: any) {
      expect(repFunc).toHaveBeenCalled();
      expect(error.message).toBe("course doesn't update");
    }
  });
});

describe("", () => {
  test("", async () => {
    const mock = jest.spyOn(repository, "deleteCourseDB");
    mock.mockResolvedValue([{ id: 1, course: "test1" }]);

    const res = await deleteCourse(1);

    expect(mock).toBeCalled();
    expect(mock).toBeCalledWith(1);

    expect(res.length).toBeGreaterThan(0);
    expect(res.length).toBeGreaterThanOrEqual(1);
    expect(res.length).toBeLessThan(2);
    expect(res.length).toBeLessThanOrEqual(1);
  });

  test("", async () => {
    const mock = jest.spyOn(repository, "deleteCourseDB");
    mock.mockResolvedValue([]);

    try {
      await deleteCourse(1);
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledWith(1);

      expect(error.message).toBe("course doesn't delete");
    }
  });
});
