import {SORT_BY_AZ, SORT_BY_ZA} from '../actions/sort-actions';

export const sortByAz = () => ({
    type: SORT_BY_AZ,
    status: 'sorted_az'
});

export const sortByZa = () => ({
    type: SORT_BY_ZA,
    status: 'sorted_za'
});