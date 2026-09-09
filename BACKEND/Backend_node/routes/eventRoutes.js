const express = require('express');
const router = express.Router();

const { testEvent } = require('../controllers/eventController');

router.get('/test', testEvent);

module.exports = router;

