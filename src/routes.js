const express = require('express');
const router = express();

router.get('/', (req, res) => res.json({ message: "Server is up and running!" }))

module.exports = router;