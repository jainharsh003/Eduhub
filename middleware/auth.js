// middleware/auth.js
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';

const secretKey = randomBytes(32).toString('hex');

export const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, secretKey, { expiresIn: '1h' });
};

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
