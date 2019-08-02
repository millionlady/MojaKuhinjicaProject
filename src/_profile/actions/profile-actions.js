import actionTypes from '../constants/action-types';

export const getMypostsSuccess = (data) => {
    return {
        type: actionTypes.GET_MYPOSTS_SUCCESS,
        data
    }
}