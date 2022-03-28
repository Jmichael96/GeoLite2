const router = require('express').Router();
const geo = require('./geo');

router.use('/api/geo', geo);

module.exports = router;