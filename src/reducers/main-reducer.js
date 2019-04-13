import { START_FETCHING_FILMS } from '../actions/request-actions';
import { FILMS_TO_STORE } from '../actions/request-actions';

export const mainReducer = (state = [], action) =>{
    switch (action.type){
    case FILMS_TO_STORE:
        return [
            ...action.films,
        ];
    default :
        return state;
    }
};
