/* eslint-disable no-unused-vars,no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import './film-item.css';
import { Link } from 'react-router-dom';

const FilmItem = ({title, id}) => (
    <div className='film-item-container'>
        <Link to={`/cartoons/${id}`}>
            <img className='film-image' src={require('../../assets/18d9d66d9715841e4e19fa5c5fb02ab1.jpg')}/>
            <h4>{title}</h4>
        </Link>
    </div>
);

FilmItem.propTypes = {
    title: PropTypes.string,
    onClickCartoon: PropTypes.func
};

export default FilmItem;
