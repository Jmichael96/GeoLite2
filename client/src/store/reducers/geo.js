import * as types from '../actions/types/geo';

const initialState = {
    fetching: false,
    address: null
};

const geoReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.FETCH_LOCATION_FAIL:
            return {
                ...state,
                fetching: false,
                address: null
            };
        case types.FETCH_LOCATION_PENDING:
            return {
                ...state,
                fetching: true
            };
        case types.FETCH_LOCATION_SUCCESS:
            return {
                ...state,
                fetching: false,
                address: payload
            };
        default:
            return state;
    }
};
export default geoReducer;