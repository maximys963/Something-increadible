/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './film-details.css';

class FilmDetails extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {itemId, data} = this.props;
        console.log(itemId);
        return(
            <div className='cartoon-details-container'>
                {data
                    .filter(elem => elem._id === itemId)
                    .map((el, i) => (
                        <div key={i}>
                            <h3> Film: {el.name}</h3>
                            <p> Year: {el.year}</p>
                            <p> Format: {el.format}</p>
                        </div>))}
            </div>);
    }
}

const mapStateToProps = (state) => ({
    data: state.mainReducer
});

export default connect(mapStateToProps, null)(FilmDetails);

