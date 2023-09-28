// router
const express = require('express');
const router = express.Router();

const { login, dashboard } = require('../controllers/main');

router.route('/dashboard').get(dashboard); // /api/v1/dashboard
router.route('/login').post(login); // /api/v1/login

module.exports = router;