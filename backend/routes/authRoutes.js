const express = require('express');
const authController = require('../controllers/authController');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

User.addHook('beforeCreate', async (user, options) => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
});

module.exports = router;