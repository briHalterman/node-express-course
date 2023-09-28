// router

// 2 types of routes:
// public       - accessable by anyone
// restiricted  - accessable only with correct signed JWT

// if user provides correct credentials, we send back signed JWT
// in order to access dashboard route, must provide same token

// Big Picture:
// JWT - way to exchange data between two parties
// Integrity! JWT has security feature, if the token passes the validation, it means its the same token we sent to the client and the data wasn't tampered with
// HTTP is stateless, server does not "remember" any previous request sent by the same client (front-end will always need to send JWT)

// What is a JSON Web Token?
// This information can be verified and trusted because it has been digitally signed
// using secret & algorithm
// header, payload & signature
// Header - type & algorithm, Base64Url
// Payload - this is where we'll place the information i.e. user id
// Signature - where algorithm is used, incl. secret (kept on server)
// The output is three Base64-URL strings separated by dots that can be easily passed in HTML & HTTP environments

const express = require('express');
const router = express.Router();

const { login, dashboard } = require('../controllers/main');

router.route('/dashboard').get(dashboard); // /api/v1/dashboard
router.route('/login').post(login); // /api/v1/login

module.exports = router;