const router = require('express').Router();
const GeoController = require('../controllers/geo');

//! @route    POST api/geo/fetch_address
//! @desc     Fetch IP location
router.post('/fetch_address', GeoController.fetchAddress);

module.exports = router;