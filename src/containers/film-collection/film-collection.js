/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import * as actions from '../../action-creators/video-collection-ac';
import FilmItem from '../../components/film-item/film-item';
import SearchInstruments from '../../components/search-instruments-bar/search-instruments';
import PropTypes from 'prop-types';
import './film-collection.css';

class FilmCollection extends Component {

    componentDidMount() {
        this.props.startFechingData();
    }

    render() {
        const {films, addFileFilms} = this.props;
        const uploadFile = (target) => {
            addFileFilms(target);
        };
        return (
            <div className='main-screen-container'>
                <SearchInstruments uploadFile={(e) => uploadFile(e)}/>
                {films.length === 0
                    ?(<Spin className='film-spin'/>)
                    :(<div className='film-container'>
                        {films
                            .filter((elem) => elem.visible === true)
                            .map((elem, index) => (
                                <FilmItem
                                    deleteStatus={elem.deleteStatus}
                                    key={index}
                                    id={elem._id}
                                    title={elem.name}
                                />
                            ))}
                    </div>)
                }</div>
        );
    }
}

FilmCollection.propsTypes = {
    films: PropTypes.array,
    addFileFilms: PropTypes.func
};

const mapStateToProps = (state) => ({
    films: state.mainReducer
});
export default connect(mapStateToProps, actions)(FilmCollection);
