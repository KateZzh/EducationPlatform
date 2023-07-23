import { iUser } from "../../../interfaces";
import { createUserDB, getEmailDB } from "../../../repository/api.repository";

const mClient = { query: jest.fn() };

jest.mock("pg", () => {
  return {
    Pool: jest.fn(() => {
      return {
        connect: jest.fn(() => {
          return mClient;
        }),
      };
    }),
  };
});

describe("createUserDB:", () => {
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

    const res = await createUserDB("Test1", "Test11", "test1@gmail.com", "123");

    expect(res).toEqual(arr);
    expect(res).toHaveLength(1);
  });

  test("error createUserDB:", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await createUserDB("Test1", "Test11", "test1@gmail.com", "123");

    expect(res).toEqual([]);
    expect(res).toHaveLength(0);
  });
});

describe("getEmailDB:", () => {
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

    const res = await getEmailDB("test1@gmail.com");

    expect(res).toEqual(arr);
    expect(res).toHaveLength(1);
  });

  test("error getEmailDB", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await getEmailDB("test1@gmail.com");

    expect(res).toEqual([]);
    expect(res).toHaveLength(0);
  });
});
