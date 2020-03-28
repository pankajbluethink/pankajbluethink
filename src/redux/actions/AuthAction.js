import {LOGOUT } from '../../constants/ReducerConstants';




export const RequestOTPAction = (payload = {}) => (dispatch, getState, { api }) => {

    return api
        .post('url', payload)
        .then(res => {
            return res;
        })
        .catch(error => {
            return error;
        });

}




export const LogoutAction = () => (dispatch, getState, { api }) => {

    dispatch({
        type: LOGOUT
    });
};

