import {START_FETCHING_DATA} from '../actions/actions';

export const rootReducer = (state = {}, action) =>{
    switch (action.type){
    case START_FETCHING_DATA:
        return {
            ...state,
            data: action.films
        };
    default :
        return state;
    }
};
