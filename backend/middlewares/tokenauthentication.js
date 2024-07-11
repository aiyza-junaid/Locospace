//middleware to authenticate token
const User = require('../models/userModel')
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']; 
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try{
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {

        if (err) {
          return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }
        
        req.user = User.findById(decoded.user_id); 
    
        next();
      });

  }
  catch{
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
  
}
module.exports = authenticateToken;
