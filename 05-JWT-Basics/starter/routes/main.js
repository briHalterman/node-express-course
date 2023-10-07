// router

// 2 types of routes:
// public       - accessable by anyone
// restiricted  - accessable only with correct signed JWT

const express = require('express');
const router = express.Router();

const { login, dashboard } = require('../controllers/main');

const authMiddleware = require('../middleware/auth');

router.route('/dashboard').get(authMiddleware, dashboard); // /api/v1/dashboard
router.route('/login').post(login); // /api/v1/login

module.exports = router;