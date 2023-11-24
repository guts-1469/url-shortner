const express = require('express');
const router = express.Router();
const {generateURL, getShortURL, getAnalytics} = require('../controller/urlController');

router.post("/url", generateURL);
router.get("/:id", getShortURL);
router.get("/analytics/:id", getAnalytics);

module.exports = router;