const express = require('express');
const router = express();
const {createCMSOrganizer} = require('./contoller');

router.post('/organizers', createCMSOrganizer);

module.exports = router;