const express = require('express');
const { body } = require('express-validator');
const {
  register,
  login,
  logout,
  getCurrentUser
} = require('../controllers/authController');

const router = express.Router();

// Validation 
const registerValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
];

const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').exists()
];

// Routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.post('/logout', logout);
router.get('/user', getCurrentUser);

module.exports = router;