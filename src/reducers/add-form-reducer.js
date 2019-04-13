import {CHANGE_FILM_NAME,
    CHANGE_FILM_YEAR,
    CHANGE_FILM_FORMAT,
    CHANGE_FILM_ACTORS} from '../actions/add-form-actions';

const initialState = {
    name: '',
    year: '',
    format: '',
    actors: ''
};

export const formReducer = (state = initialState, action) =>{
    switch (action.type){
    case CHANGE_FILM_NAME:
        return({...state, name: action.name});
    case CHANGE_FILM_YEAR:
        return({...state, year: action.year});
    case CHANGE_FILM_FORMAT:
        return({...state, format: action.format});
    case CHANGE_FILM_ACTORS:
        return({...state, actors: action.actors});
    default :
        return state;
    }
};