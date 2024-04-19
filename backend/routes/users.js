const express = require('express');
const { register, getUsers } = require('../controller/users');
const router = express.Router();

router.get('/', getUsers);

router.post('/register', register);

module.exports = router;