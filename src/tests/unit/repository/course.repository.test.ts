import { connect } from "http2";
import {
  getUsersDB,
  createCourseDB,
  getCourseByIdDB,
  updateCourseDB,
  deleteCourseDB,
} from "../../../repository/course.repository";

// const mClient = {
//   query: jest.fn(),
// };

// jest.mock("pg", () => {
//   const pool = {
//     connect: jest.fn(() => mClient),
//   };
//   return { Pool: jest.fn(() => pool) };
// });

const mClient = { query: jest.fn() };

jest.mock("pg", function () {
  return {
    Pool: jest.fn(function () {
      return {
        connect: jest.fn(function () {
          return mClient;
        }),
      };
    }),
  };
});

describe("getUsersDB:", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({
      rows: [
        { id: 1, course: "js" },
        { id: 2, course: "ts" },
      ],
    });

    const res = await getUsersDB();

    expect(res).toEqual([
      { id: 1, course: "js" },
      { id: 2, course: "ts" },
    ]);
    expect(res).toHaveLength(2);
  });
});

describe("getCourseByIdDB:", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: "js" }] });

    const res = await getCourseByIdDB(1);

    expect(res).toEqual([{ id: 1, course: "js" }]);
  });
});

describe("createCourseDB:", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: "js" }] });

    const res = await createCourseDB("js");

    expect(res).toEqual([{ id: 1, course: "js" }]);
  });
});

describe("updateCourseDB:", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 2, course: "java" }] });

    const res = await updateCourseDB(2, "java");

    expect(res).toEqual([{ id: 2, course: "java" }]);
  });
});

describe("deleteCourseDB:", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 2, course: "java" }] });

    const res = await deleteCourseDB(2);

    expect(res).toEqual([{ id: 2, course: "java" }]);
  });
});
