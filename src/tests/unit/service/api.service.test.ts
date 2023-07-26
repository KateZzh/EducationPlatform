import { createUser, authorizationUser } from '../../../service/api.service';
import * as repository from '../../../repository/api.repository';
import bcrypt from 'bcrypt';

describe('createUser:', () => {
  test('', async () => {
    const mockgetEmail = jest.spyOn(repository, 'getEmailDB');
    const mockHash = jest.spyOn(bcrypt, 'hash');
    const mockCreateUser = jest.spyOn(repository, 'createUserDB');

    mockgetEmail.mockResolvedValue([]);
    mockHash.mockResolvedValue('123');
    mockCreateUser.mockResolvedValue([
      {
        id: 1,
        name: 'test',
        surname: 'test',
        email: 'test@gmail.com',
        pwd: '123',
      },
    ]);

    const res = await createUser('test', 'test', 'test@gmail.com', '123');

    expect(mockgetEmail).toHaveBeenCalled();
    expect(mockHash).toHaveBeenCalled();
    expect(mockHash).toHaveBeenCalledWith('123', 10);
    expect(mockCreateUser).toHaveBeenCalled();
    expect(res).toEqual([
      {
        id: 1,
        name: 'test',
        surname: 'test',
        email: 'test@gmail.com',
        pwd: '123',
      },
    ]);
  });

  test('error getEmail:', async () => {
    const mockGetEmail = jest.spyOn(repository, 'getEmailDB');

    mockGetEmail.mockResolvedValue([
      {
        id: 1,
        name: 'test',
        surname: 'test',
        email: 'test@gmail.com',
        pwd: '123',
      },
    ]);

    try {
      await createUser('test', 'test', 'test@gmail.com', '123');
    } catch (err: any) {
      expect(mockGetEmail).toHaveBeenCalled();
      expect(err.message).toBe('user already exists');
    }
  });

  test('error createUser:', async () => {
    const mockGetEmail = jest.spyOn(repository, 'getEmailDB');
    const mockHash = jest.spyOn(bcrypt, 'hash');
    const mockCreateUser = jest.spyOn(repository, 'createUserDB');

    mockGetEmail.mockResolvedValue([]);
    mockHash.mockResolvedValue('123');
    mockCreateUser.mockResolvedValue([]);

    try {
      await createUser('test', 'test', 'test@gmail.com', '123');
    } catch (err: any) {
      expect(mockGetEmail).toHaveBeenCalled();
      expect(mockHash).toHaveBeenCalled();
      expect(mockCreateUser).toHaveBeenCalled();
      expect(err.message).toBe('user not created');
    }
  });
});

describe('authorizationUser:', () => {
  test('', async () => {
    const mockGetEmail = jest.spyOn(repository, 'getEmailDB');
    const mockCompare = jest.spyOn(bcrypt, 'compare');

    mockGetEmail.mockResolvedValue([
      {
        id: 1,
        name: 'test',
        surname: 'test',
        email: 'test@gmail.com',
        pwd: '123',
      },
    ]);
    mockCompare.mockResolvedValue(true);

    const res = await authorizationUser('test@gmail.com', '123');

    expect(mockGetEmail).toHaveBeenCalled();
    expect(mockCompare).toHaveBeenCalled();
    expect(mockCompare).toHaveBeenCalledWith('123', '123');
    expect(res).toEqual([
      {
        id: 1,
        name: 'test',
        surname: 'test',
        email: 'test@gmail.com',
        pwd: '123',
      },
    ]);
  });

  test('error getEmail:', async () => {
    const mockGetEmail = jest.spyOn(repository, 'getEmailDB');

    mockGetEmail.mockResolvedValue([]);

    try {
      await authorizationUser('test@gmail.com', '123');
    } catch (err: any) {
      expect(mockGetEmail).toHaveBeenCalled();
      expect(err.message).toBe('user not found');
    }
  });

  test('error password:', async () => {
    const mockGetEmail = jest.spyOn(repository, 'getEmailDB');
    const mockCompare = jest.spyOn(bcrypt, 'compare');

    mockGetEmail.mockResolvedValue([
      {
        id: 1,
        name: 'test',
        surname: 'test',
        email: 'test@gmail.com',
        pwd: '123',
      },
    ]);
    mockCompare.mockResolvedValue(false);

    try {
      await authorizationUser('test@gmail.com', '123');
    } catch (err: any) {
      expect(mockGetEmail).toHaveBeenCalled();
      expect(mockCompare).toHaveBeenCalled();
      expect(err.message).toBe("password doesn't match");
    }
  });
});
