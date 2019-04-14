/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './film-details.css';
import { Spin } from 'antd';
import * as actions from '../../action-creators/video-collection-ac';

class FilmDetails extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.startFechingData();
    }

    render(){
        const {itemId, data} = this.props;
        console.log(itemId);
        return(
            <div className='cartoon-details-container'>
                {data.length === 0
                    ? (<Spin/>)
                    :(data.filter(elem => elem._id === itemId)
                        .map((el, i) => (
                            <div key={i} className='cartoon-details-group'>
                                <h3>{el.name}</h3>
                                <p> Year: {el.year}</p>
                                <p> Format: {el.format}</p>
                                <div className='actors-container'>
                                Actors: {el.actors.join(', ')}.
                                </div>
                            </div>)))}
            </div>);}
}

const mapStateToProps = (state) => ({
    data: state.mainReducer
});

export default connect(mapStateToProps, actions)(FilmDetails);

