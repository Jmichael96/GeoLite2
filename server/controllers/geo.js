const MMDBReader = require('mmdb-reader');

//! @route    POST api/geo/fetch_address
//! @desc     Fetch IP location
exports.fetchAddress = async (req, res, next) => {
    const reader = new MMDBReader('server/saved_data/GeoLite2.mmdb'); 

    // let data = reader.lookup('131.255.7.26');
    let data = reader.lookup(req.body.ip);
    // if we didn't find the ip address in the mmdb return an error
    if (!data) {
        return res.status(404).json({
            serverMsg: 'Could not find a location with  the given IP address'
        });
    }
    // Fetched Data Successfully :)
    return res.status(201).json({
        serverMsg: 'Fetched IP successfully',
        address: data.location
    });
};