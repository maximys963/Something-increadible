/* eslint-disable no-unused-vars,no-undef */
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../action-creators/video-collection-ac';
import './film-item.css';

const FilmItem = (props) =>{
    const {title, id, deleteFilm} = props;
    return(
        <div className='film-item-container'>
            <div className='delete-icon-container'>
                <img
                    onClick={() => deleteFilm(id)}
                    className='delete-film'
                    src={require('../../assets/icons/clear.svg')}
                />
            </div>
            <Link to={`/cartoons/${id}`}>
                <img className='film-image' src={require('../../assets/18d9d66d9715841e4e19fa5c5fb02ab1.jpg')}/>
                <h4 className='film-title'>{title}</h4>
            </Link>
        </div>
    );};

FilmItem.propTypes = {
    title: PropTypes.string,
    onClickCartoon: PropTypes.func
};

export default connect(null, actions)(FilmItem);
