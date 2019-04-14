import { CHANGE_SEARCH_METHOD, CHANGE_SEARCH_INPUT } from '../actions/data-interaction-actions';

const initialState = {
    searchString: '',
    method: 'by_name'
};

export const searchReducer = (state = initialState, action) =>{
    switch (action.type){
    case CHANGE_SEARCH_METHOD:
        return {...state, method: action.method};
    case CHANGE_SEARCH_INPUT:
        return {...state, searchString: action.value};
    default:
        return state;
    }
};