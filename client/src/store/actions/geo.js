import * as types from './types/geo';
import axios from 'axios';
import { setAlert } from './alert';
import Constants from '../../utils/Constants';
const PROD_URL = Constants.PROD_URL;

//! Fetch IP Location
export const fetchLocation = (ip) => async (dispatch) => {
    // initiate pending to render loaders
    await dispatch({ type: types.FETCH_LOCATION_PENDING });
    // make http req
    await dispatch(fetchLocationReq(ip));
};

export const fetchLocationReq = (ip) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    await axios.post(`${PROD_URL}/api/geo/fetch_address`, { ip }, config)
    .then(async (res) => {
        // assign received data to store through payload
        await dispatch({
            type: types.FETCH_LOCATION_SUCCESS,
            payload: res.data.address
        });
    }).catch(async (err) => {
        const error = err.response.data.serverMsg;
        // if error from the server return the given error msg
        if (error) {
            await dispatch(setAlert(error, 'error'));
        }
        await dispatch({
            type: types.FETCH_LOCATION_FAIL
        });
    });
};