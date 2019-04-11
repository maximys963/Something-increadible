/* eslint-disable indent,no-console */
import {START_FETCHING_DATA} from '../actions/actions';
import axios from 'axios';

export const asyncfetchingData = () => (
     (dispatch) => (
       axios.get('https://ghibliapi.herokuapp.com/films/')
            .then(response => {
                    console.log(response.data);
                    dispatch(fetchData(response.data));
                })
));

const fetchData = (response) => ({
    type: START_FETCHING_DATA,
    films: response
});





