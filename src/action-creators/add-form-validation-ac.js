import {NAME_VALIDATION,
    YEAR_VALIDATION,
    FORMAT_VALIDATION,
    ACTORS_VALIDATION
} from '../actions/add-form-validation';

export const nameValidation = (bool) => ({
    type: NAME_VALIDATION,
    bool
});

export const yearValidation = (bool) => ({
    type: YEAR_VALIDATION,
    bool
});

export const actorsValidation = (bool) => ({
    type: ACTORS_VALIDATION,
    bool
});

