import { createUser, authorizationUser } from "../../../service/api.service";
import * as repository from "../../../repository/api.repository";
import bcrypt from "bcrypt";

describe("createUser:", () => {
  test("", async () => {
    const mockgetEmail = jest.spyOn(repository, "getEmailDB");
    const mockCreateUser = jest.spyOn(repository, "createUserDB");
    const mockHash = jest.spyOn(bcrypt, "hash");

    mockgetEmail.mockResolvedValue([]);
    mockHash.mockResolvedValue("aassssdddffggghhh122222");
    mockCreateUser.mockResolvedValue([
      {
        id: 2,
        name: "Jerry",
        surname: "Jem",
        email: "jerry@gmail.com",
        pwd: "aassssdddffggghhh122222",
      },
    ]);

    const res = await createUser("Jerry", "Jem", "jerry@gmail.com", "456a456a");

    expect(mockgetEmail).toHaveBeenCalled();
    expect(mockCreateUser).toHaveBeenCalled();
    expect(mockHash).toHaveBeenCalled();
    expect(mockHash).toHaveBeenCalledWith("456a456a", 10);
    expect(res).toEqual([
      {
        id: 2,
        name: "Jerry",
        surname: "Jem",
        email: "jerry@gmail.com",
        pwd: "aassssdddffggghhh122222",
      },
    ]);
  });

  test("", async () => {
    const mockgetEmail = jest.spyOn(repository, "getEmailDB");

    mockgetEmail.mockResolvedValue([]);

    try {
      await authorizationUser("jerry@gmail.com", "123");
    } catch (err: any) {
      expect(mockgetEmail).toHaveBeenCalled();
      expect(err.message).toBe("user not found");
    }
  });
});

describe("authorizationUser:", () => {
  test("", async () => {
    const mockGetEmailDB = jest.spyOn(repository, "getEmailDB");
    const mockCompare = jest.spyOn(bcrypt, "compare");

    mockGetEmailDB.mockResolvedValue([
      {
        id: 2,
        name: "Jerry",
        surname: "Jem",
        email: "jerry@gmail.com",
        pwd: "aassssdddffggghhh122222",
      },
    ]);

    mockCompare.mockResolvedValue(true);

    const res = await authorizationUser(
      "jerry@gmail.com",
      "aassssdddffggghhh122222"
    );

    expect(mockGetEmailDB).toHaveBeenCalled();
    expect(mockCompare).toHaveBeenCalled();
    expect(mockCompare).toHaveBeenCalledWith(
      "aassssdddffggghhh122222",
      "aassssdddffggghhh122222"
    );

    expect(res).toEqual([
      {
        id: 2,
        name: "Jerry",
        surname: "Jem",
        email: "jerry@gmail.com",
        pwd: "aassssdddffggghhh122222",
      },
    ]);
  });
});
