const express = require('express');
const { getHolidays } = require('./controllers/holidays.controller');
const { getDomains } = require('./controllers/domains.controller');
const router = express();

router.get('/', (req, res) => res.json({ message: "Server is up and running!" }));
router.get('/holidays', getHolidays)
router.get('/domains', getDomains)

module.exports = router;