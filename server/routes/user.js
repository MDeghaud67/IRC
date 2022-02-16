const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/nick', userCtrl.nick);
router.post('/log', userCtrl.log);
router.get('/users', userCtrl.getUsers);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;