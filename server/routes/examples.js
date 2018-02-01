const express = require('express');
const router  = express.Router();

const example_api = require('../apis/example_api');

router.get('/', example_api.index);

module.exports = router;