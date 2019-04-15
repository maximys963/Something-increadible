/* eslint-disable no-unused-vars,no-undef */
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../action-creators/video-collection-ac';
import PropTypes from 'prop-types';
import './film-item.css';

const FilmItem = (props) =>{
    const {title,
        id,
        deleteFilm,
        deleteStatus,
        changeDeleteStatus} = props;

    const toggleDeleteItem = (id) => {
        changeDeleteStatus({id, status: 'waiting'});
        deleteFilm(id);
    };

    return(
        <div className='film-item-container'>
            <div className='delete-icon-container'>
                <img
                    alt='delete-icon'
                    onClick={() => toggleDeleteItem(id)}
                    className='delete-film'
                    src={require('../../assets/icons/clear.svg')}
                />
            </div>
            <Link to={`/cartoons/${id}`}>
                <img className='film-image'
                    alt='placeholder-img'
                    src={ deleteStatus === 'waiting'
                        ? require('../../assets/delete.jpg')
                        : require('../../assets/main.jpg')
                    }
                />
                <h4 className='film-title'>
                    {deleteStatus === 'waiting' ? 'waiting' : title}
                </h4>
            </Link>
        </div>
    );};

FilmItem.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    deleteFilm: PropTypes.func,
    deleteStatus: PropTypes.string,
    changeDeleteStatus: PropTypes.func
};

export default connect(null, actions)(FilmItem);
