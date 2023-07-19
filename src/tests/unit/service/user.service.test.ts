import { getAllUsers, getUserById } from "../../../service/user.service";
import * as repository from "../../../repository/user.repository";

describe("getAllUsers:", () => {
  test("", async () => {
    const mock = jest.spyOn(repository, "getAllUsersDB");
    mock.mockResolvedValue([
      {
        id: 1,
        name: "Tom",
        surname: "Tomik",
        email: "tom@gmail.com",
        pwd: "123a123a",
      },
      {
        id: 2,
        name: "Jerry",
        surname: "Jem",
        email: "jerry@gmail.com",
        pwd: "456a456a",
      },
    ]);

    const res = await getAllUsers();

    expect(mock).toHaveBeenCalled();

    expect(res.length).toBeGreaterThan(0);
    expect(res).toEqual([
      {
        id: 1,
        name: "Tom",
        surname: "Tomik",
        email: "tom@gmail.com",
        pwd: "123a123a",
      },
      {
        id: 2,
        name: "Jerry",
        surname: "Jem",
        email: "jerry@gmail.com",
        pwd: "456a456a",
      },
    ]);
  });

  test("", async () => {
    const mock = jest.spyOn(repository, "getAllUsersDB");
    mock.mockResolvedValue([]);

    try {
      await getAllUsers();
    } catch (err: any) {
      expect(mock).toHaveBeenCalled();
      expect(err.message).toBe("table is empty");
    }
  });
});

describe("getUserById:", () => {
  test("", async () => {
    const mock = jest.spyOn(repository, "getUserByIdDB");
    mock.mockResolvedValue([
      {
        id: 2,
        name: "Jerry",
        surname: "Jem",
        email: "jerry@gmail.com",
        pwd: "456a456a",
      },
    ]);

    const res = await getUserById(2);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(2);

    expect(res.length).toBeGreaterThan(0);
    expect(res.length).toBeGreaterThanOrEqual(1);
    expect(res.length).toBeLessThan(2);
    expect(res.length).toBeLessThanOrEqual(1);

    expect(res).toEqual([
      {
        id: 2,
        name: "Jerry",
        surname: "Jem",
        email: "jerry@gmail.com",
        pwd: "456a456a",
      },
    ]);
    expect(res).toHaveLength(1);
  });

  test("", async () => {
    const mock = jest.spyOn(repository, "getUserByIdDB");
    mock.mockResolvedValue([]);

    try {
      await getUserById(2);
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe("id not found");
    }
  });
});
