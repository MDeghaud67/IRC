const express = require('express');
const router = express.Router();

const channelCtrl = require('../controllers/channel');

router.post('/create', channelCtrl.createChannel);
router.delete('/:id', channelCtrl.deleteChannel);
router.get('/list', channelCtrl.listChannels);
router.get('/:id', channelCtrl.getOneChannel);

module.exports = router;