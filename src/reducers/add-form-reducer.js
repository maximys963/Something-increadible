import {CHANGE_FILM_NAME,
    CHANGE_FILM_YEAR,
    CHANGE_FILM_FORMAT,
    CHANGE_FILM_ACTORS,
    CHANGE_ADD_STATUS,
    VALIDATE_INPUTS,
} from '../actions/add-form-actions';

import {NAME_VALIDATION,
    ACTORS_VALIDATION,
    YEAR_VALIDATION
} from '../actions/add-form-validation';

const initialState = {
    addingStatus: 'no-status',
    name: '',
    year: '',
    format: 'DVD',
    actors: '',
    formValidated: null,
    nameValid: null,
    yearValid: null,
    actorsValid: null,
    formatValid: null,
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
    case VALIDATE_INPUTS:
        return({...state, valid: action.result});
    case YEAR_VALIDATION:
        return({...state, yearValid: action.bool});
    case NAME_VALIDATION:
        return({...state, nameValid: action.bool});
    case ACTORS_VALIDATION:
        return({...state, actorsValid: action.bool});
    case CHANGE_ADD_STATUS:
        return({...state, addingStatus: action.status });
    default:
        return state;
    }
};
