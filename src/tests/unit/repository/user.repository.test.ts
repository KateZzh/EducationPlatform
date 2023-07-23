import { iUser } from "../../../interfaces";
import {
  getAllUsersDB,
  getUserByIdDB,
  updateUserDB,
  deleteUserDB,
} from "../../../repository/user.repository";

const mClient = {
  query: jest.fn(),
};

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

describe("getAllUsersDB:", () => {
  test("", async () => {
    const arr: iUser[] = [
      {
        id: 1,
        name: "Test1",
        surname: "Test11",
        email: "test1@gmail.com",
        pwd: "123",
      },
      {
        id: 2,
        name: "Test2",
        surname: "Test22",
        email: "test2@gmail.com",
        pwd: "456",
      },
    ];

    mClient.query.mockResolvedValue({ rows: arr });

    const res = await getAllUsersDB();

    expect(res).toEqual(arr);
    expect(res).toHaveLength(2);
    expect(res).toContainEqual(arr[0]);
  });

  test("error getAllUsersDB:", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await getAllUsersDB();

    expect(res).toEqual([]);
    expect(res).toHaveLength(0);
  });
});

describe("getUserByIdDB:", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({
      rows: [
        {
          id: 2,
          name: "Test2",
          surname: "Test22",
          email: "test2@gmail.com",
          pwd: "456",
        },
      ],
    });

    const res = await getUserByIdDB(2);

    expect(res).toEqual([
      {
        id: 2,
        name: "Test2",
        surname: "Test22",
        email: "test2@gmail.com",
        pwd: "456",
      },
    ]);
    expect(res).toHaveLength(1);
  });

  test("error getUserByIdDB:", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await getUserByIdDB(2);

    expect(res).toEqual([]);
    expect(res).toHaveLength(0);
  });
});

describe("updateUserDB:", () => {
  test("", async () => {
    const arr: iUser[] = [
      {
        id: 1,
        name: "Test1",
        surname: "Test11",
        email: "test1@gmail.com",
        pwd: "123",
      },
    ];

    mClient.query.mockResolvedValue({ rows: arr });

    const res = await updateUserDB(
      1,
      "Test1",
      "Test11",
      "test1@gmail.com",
      "123"
    );

    expect(res).toEqual([
      {
        id: 1,
        name: "Test1",
        surname: "Test11",
        email: "test1@gmail.com",
        pwd: "123",
      },
    ]);
    expect(res).toHaveLength(1);
  });

  test("error updateUserDB", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await updateUserDB(
      1,
      "Test1",
      "Test11",
      "test1@gmail.com",
      "123"
    );

    expect(res).toEqual([]);
    expect(res).toHaveLength(0);
  });
});

describe("deleteUserDB:", () => {
  test("", async () => {
    const arr: iUser[] = [
      {
        id: 2,
        name: "Test2",
        surname: "Test22",
        email: "test2@gmail.com",
        pwd: "456",
      },
    ];

    mClient.query.mockResolvedValue({ rows: arr });

    const res = await deleteUserDB(2);

    expect(res).toEqual(arr);
    expect(res).toHaveLength(1);
  });

  test("error deleteUserDB:", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await deleteUserDB(2);

    expect(res).toEqual([]);
    expect(res).toHaveLength(0);
  });
});
