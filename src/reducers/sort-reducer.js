/* eslint-disable no-case-declarations */
import {SORT_BY_ZA, SORT_BY_AZ} from '../actions/sort-actions';

const instialState = {
    status: 'not_sorted'
};

export const sortReducer = (state = instialState, action) =>{
    switch (action.type){
    case SORT_BY_ZA:
        return {...state, status: action.status};
    case SORT_BY_AZ:
        return {...state, status: action.status};
    default:
        return state;
    }
};
