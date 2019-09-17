import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  console.log('Auth Header', req.header);
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ errors: [{ msg: 'No Token. Please sign in.' }] });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  }
  catch (err) {
    return res.status(401).json({ errors: [{ msg: 'Invalid token. Please sign in.' }] });
  }
};

export default auth;
