import createDataContext from '../createDataContext';

const utilReducer = (state, action) => {
    switch (action.type) {
        case 'edit_home_util':
            return {...state, homeUtil: action.payload };
        case 'edit_missed_flight_util': 
            return {...state, missedFlightUtil: action.payload};
        default: 
            return state;
    }
}

const editHomeUtils = dispatch => (value) => {
    dispatch({ type: 'edit_home_util', payload: value });
}

const editMissedFlightUtil = dispatch => (value) => {
    dispatch({ type: 'edit_missed_flight_util', payload: value });
}

export const { Context, Provider } = createDataContext(
    utilReducer, 
    { editHomeUtils, editMissedFlightUtil },
    { homeUtil: 0, missedFlightUtil: 0 }
)