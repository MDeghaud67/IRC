const express = require('express');
const router = express.Router();

const chatCtrl = require('../controllers/chat');

router.get('/chats', chatCtrl.listMessages);
router.post('/send', chatCtrl.sendMessage);

module.exports = router;