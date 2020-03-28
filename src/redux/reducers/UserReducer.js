import * as _ from 'lodash';
import { REDUX_PERSIST, LOGGED_IN, LOGOUT, UPDATE_PROFILE } from '../../constants/ReducerConstants';
import { axiosInstance } from '../store'

export default (state = {}, action) => {
    console.log("state, action", state, action)
    switch (action.type) {

        case LOGGED_IN:

            return {
                ...state,
                userToken: _.get(action.payload, 'token'),
                userDetails: _.get(action.payload, 'patient'),
                isUserLoggedIn: true,
            };


        case UPDATE_PROFILE:

            return {
                ...state,
                userDetails: _.get(action, 'payload'),

            }

        case LOGOUT:
            return {};

        case REDUX_PERSIST:

            if (!_.isEmpty(_.get(action, 'payload.user.userToken'))) {

                axiosInstance.defaults.headers.common['Authorization'] = `Token ${_.get(action, 'payload.user.userToken')}`;
            }
            return state;

        default:
            return state;

    }

}
