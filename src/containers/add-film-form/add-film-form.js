import React from 'react';
import { connect} from 'react-redux';
import * as actions from '../../action-creators/add-form-ac';
import { TextArea, Button, Label, Form} from 'semantic-ui-react';
import './add-film-form.css';

const AddFilmForm = (props) => {
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
                <Form className='add-form'>
                    <Form.Field>
                        <input
                            value={name}
                            placeholder='Film name'
                            onChange={(e) => changeFilmName(e.target.value)}
                        />
                        <Label pointing>Please write film name</Label>
                    </Form.Field>
                    <Form.Field>
                        <input
                            value={year}
                            placeholder='Year'
                            onChange={(e) => changeFilmYear(e.target.value)}
                        />
                        <Label pointing>Please write year</Label>
                    </Form.Field>
                    <Form.Field>
                        <input
                            value={format}
                            placeholder='Format'
                            onChange={(e) => changeFilmFormat(e.target.value)}
                        />
                        <Label pointing>Please write format</Label>
                    </Form.Field>
                    <Form.Field>
                        <TextArea
                            value={actors}
                            className='add-actors-area'
                            placeholder='Actors'
                            onChange={(e) => changeFilmActors(e.target.value)}
                        />
                        <Label pointing>Please write actors</Label>
                    </Form.Field>
                </Form>
                <Button
                    color='green'
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

