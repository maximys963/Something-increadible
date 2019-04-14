import React from 'react';
import { connect} from 'react-redux';
import * as actions from '../../action-creators/add-form-ac';
import { Select, Input, Button,  } from 'antd';
import './add-film-form.css';

const AddFilmForm = (props) => {
    const Option = Select.Option;
    const { TextArea } = Input;
    const { addFilm,
        changeFilmName,
        changeFilmYear,
        changeFilmFormat,
        changeFilmActors,
        name,
        year,
        format,
        actors} = props;

    const prepareDataToRequest = () => {
        const actorsFromStore = actors.split(',');
        const filmYearFromStore = Number(year);
        const requestData = {
            name,
            year: filmYearFromStore,
            actors: actorsFromStore,
            format,
        };
        addFilm(requestData);
    };
    return(
        <div className='add-form-container'>
            <div className='add-form-group'>
                <Input
                    className='add-input'
                    value={name}
                    placeholder='Film name'
                    onChange={(e) => changeFilmName(e.target.value)}
                />
                <Input
                    className='add-input'
                    value={year}
                    placeholder='Year'
                    onChange={(e) => changeFilmYear(e.target.value)}
                />
                <Select
                    className='add-select'
                    placeholder='Format'
                    onSelect={(value) => changeFilmFormat(value)}>
                    <Option value='DVD'>DVD</Option>
                    <Option value='Blu-Ray'>Blu-Ray</Option>
                    <Option value='VHS'>VHS</Option>
                </Select>
                <TextArea
                    className='add-actors-area'
                    value={actors}
                    rows={4}
                    placeholder='Actors'
                    onChange={(e) => changeFilmActors(e.target.value)}
                />
                <Button
                    className='add-button'
                    type='primary'
                    onClick={() => prepareDataToRequest()}>Add film</Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    name: state.form.name,
    year: state.form.year,
    format: state.form.format,
    actors: state.form.actors
});

export default connect(mapStateToProps, actions)(AddFilmForm);

