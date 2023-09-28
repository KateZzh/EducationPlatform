import jwt from 'jsonwebtoken';

const createToken = (authorizationUser) => {
  const token = jwt.sign(authorizationUser[0], 'key');

  return token;
};

export default createToken;
