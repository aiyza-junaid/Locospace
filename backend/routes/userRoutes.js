const User = require('../models/userModel');
const express = require('express');
const router = express.Router();

router.post('/users', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      console.log('User created:', newUser);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
});

module.exports = router;