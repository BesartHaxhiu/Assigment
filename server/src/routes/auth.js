const express = require('express');
const router = express.Router();

const { signup, signin, getUsers, getUserById, deleteUserById } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/', getUsers);
router.get('/:userId', getUserById)
router.delete('/:userId', deleteUserById)
module.exports = router;