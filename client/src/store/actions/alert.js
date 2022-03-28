import { v4 as uuidv4 } from 'uuid';
import * as types from './types/alert';

export const setAlert = (msg, alertType, timeout = 4000) => async (dispatch) => {
    const id = uuidv4();
    await dispatch({
        type: types.SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({ type: types.REMOVE_ALERT, payload: id }), timeout);
};

export const removeAlert = (id) => async (dispatch) => {
    await dispatch({
        type: types.REMOVE_ALERT,
        payload: id
    });
};