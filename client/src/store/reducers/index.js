import { combineReducers } from 'redux';
import alert from './alert';
import geo from './geo';

const rootReducer = combineReducers({
    alert,
    geo
});

export default rootReducer;