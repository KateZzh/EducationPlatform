import { getAllUsers, getUserById, updateUser, deleteUser } from '../../../service/user.service';
import * as repository from '../../../repository/user.repository';

describe('getAllUsers:', () => {
  test('', async () => {
    const mock = jest.spyOn(repository, 'getAllUsersDB');
    mock.mockResolvedValue([
      {
        id: 1,
        name: 'Tom',
        surname: 'Tomik',
        email: 'tom@gmail.com',
        pwd: '123a123a',
      },
      {
        id: 2,
        name: 'Jerry',
        surname: 'Jem',
        email: 'jerry@gmail.com',
        pwd: '456a456a',
      },
    ]);

    const res = await getAllUsers();

    expect(mock).toHaveBeenCalled();

    expect(res.length).toBeGreaterThan(0);
    expect(res).toEqual([
      {
        id: 1,
        name: 'Tom',
        surname: 'Tomik',
        email: 'tom@gmail.com',
        pwd: '123a123a',
      },
      {
        id: 2,
        name: 'Jerry',
        surname: 'Jem',
        email: 'jerry@gmail.com',
        pwd: '456a456a',
      },
    ]);
  });

  test('', async () => {
    const mock = jest.spyOn(repository, 'getAllUsersDB');
    mock.mockResolvedValue([]);

    try {
      await getAllUsers();
    } catch (err: any) {
      expect(mock).toHaveBeenCalled();
      expect(err.message).toBe('table is empty');
    }
  });
});

describe('getUserById:', () => {
  test('', async () => {
    const mock = jest.spyOn(repository, 'getUserByIdDB');
    mock.mockResolvedValue([
      {
        id: 2,
        name: 'Jerry',
        surname: 'Jem',
        email: 'jerry@gmail.com',
        pwd: '456a456a',
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
        name: 'Jerry',
        surname: 'Jem',
        email: 'jerry@gmail.com',
        pwd: '456a456a',
      },
    ]);
    expect(res).toHaveLength(1);
  });

  test('', async () => {
    const mock = jest.spyOn(repository, 'getUserByIdDB');
    mock.mockResolvedValue([]);

    try {
      await getUserById(2);
    } catch (err: any) {
      expect(mock).toHaveBeenCalled();
      expect(err.message).toBe('id not found');
    }
  });
});

describe('updateUser:', () => {
  test('', async () => {
    const mock = jest.spyOn(repository, 'updateUserDB');
    mock.mockResolvedValue([
      {
        id: 1,
        name: 'Tom',
        surname: 'Tomik',
        email: 'tom@gmail.com',
        pwd: '12345678aa',
      },
    ]);

    const res = await updateUser(1, 'Tom', 'Tomik', 'tom@gmail.com', '12345678aa');

    expect(mock).toHaveBeenCalled();

    expect(res.length).toBeGreaterThan(0);
    expect(res.length).toBeGreaterThanOrEqual(1);

    expect(res).toEqual([
      {
        id: 1,
        name: 'Tom',
        surname: 'Tomik',
        email: 'tom@gmail.com',
        pwd: '12345678aa',
      },
    ]);
    expect(res).toHaveLength(1);
  });

  test('', async () => {
    const mock = jest.spyOn(repository, 'updateUserDB');
    mock.mockResolvedValue([]);

    try {
      await updateUser(1, 'Tom', 'Tomik', 'tom@gmail.com', '12345678aa');
    } catch (err: any) {
      expect(mock).toHaveBeenCalled();
      expect(err.message).toBe("user doesn't update");
    }
  });
});

describe('deleteUser:', () => {
  test('', async () => {
    const mock = jest.spyOn(repository, 'deleteUserDB');
    mock.mockResolvedValue([
      {
        id: 2,
        name: 'Jerry',
        surname: 'Jem',
        email: 'jerry@gmail.com',
        pwd: '456a456a',
      },
    ]);

    const res = await deleteUser(2);

    expect(mock).toHaveBeenCalled();
    expect(mock).toBeCalledWith(2);

    expect(res.length).toBeGreaterThan(0);
    expect(res.length).toBeGreaterThanOrEqual(1);

    expect(res).toEqual([
      {
        id: 2,
        name: 'Jerry',
        surname: 'Jem',
        email: 'jerry@gmail.com',
        pwd: '456a456a',
      },
    ]);
    expect(res).toHaveLength(1);
  });

  test('', async () => {
    const mock = jest.spyOn(repository, 'deleteUserDB');
    mock.mockResolvedValue([]);

    try {
      await deleteUser(2);
    } catch (err: any) {
      expect(mock).toHaveBeenCalled();
      expect(err.message).toBe("user doesn't delete");
    }
  });
});
