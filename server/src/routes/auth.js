const express = require('express');
const router = express.Router();

const {register, login, deleteUser, tokenIsValid, getUsers, getUserById} = require('../controllers/auth')

router.post('/register', register);
router.post('/login', login);
router.post('/tokenIsValid', tokenIsValid);
router.get('/', getUsers);
router.get('/:userId', getUserById);
router.delete('/:userId', deleteUser);

module.exports = router;