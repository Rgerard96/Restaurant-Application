import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-micro';

const SECRET_KEY = process.env.SECRET_KEY;

export const checkAuth = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];
    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);
        return user;
      } catch (error) {
        throw new AuthenticationError('Invalid/Expire token');
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error('Authentication header must be provided');
};
