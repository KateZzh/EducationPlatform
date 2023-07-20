import {
  getUsersDB,
  createCourseDB,
  getCourseByIdDB,
  updateCourseDB,
  deleteCourseDB,
} from "../../../repository/course.repository";

// jest.mock("pg", function () {
//   return {
//     Pool: jest.fn(function () {
//       return {
//         connect: jest.fn(function () {
//           return {
//             query: jest.fn(),
//           };
//         }),
//       };
//     }),
//   };
// });

// const mClient = {
//   query: jest.fn(),
// };

// jest.mock("pg", () => {
//   const pool = {
//     connect: jest.fn(() => mClient),
//   };
//   return { Pool: jest.fn(() => pool) };
// });

// describe("", () => {
//   test("", async () => {
//     mClient.query.mockResolvedValue({
//       rows: [
//         { id: 1, course: "js" },
//         { id: 2, course: "ts" },
//       ],
//     });

//     const res = await getUsersDB();

//     expect(res).toEqual([
//       { id: 1, course: "js" },
//       { id: 2, course: "ts" },
//     ]);
//   });
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

describe("getUsersDB", () => {
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
  });
});

describe("getCourseByIdDB:", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: "js" }] });

    const res = await getCourseByIdDB(1);

    expect(res).toEqual([{ id: 1, course: "js" }]);
  });
});

describe("createCourseDB", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: "js" }] });

    const res = await createCourseDB("js");

    expect(res).toEqual([{ id: 1, course: "js" }]);
  });
});
