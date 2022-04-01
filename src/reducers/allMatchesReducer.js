import {FETCHING_ALL_MATCHES_START, FETCHING_ALL_MATCHES_SUCCESS, FETCHING_ALL_MATCHES_FAILURE} from "../actions/allMatchesActions";

const initialState = {
    loading: false,
    allMatches: [],
    leagues: [],
}

export const allMatchesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_ALL_MATCHES_START:
            return {...state, loading: true };
        case FETCHING_ALL_MATCHES_SUCCESS:
            return {...state, loading: false, allMatches: action.payload.allMatches, leagues:action.payload.leagues};
        case FETCHING_ALL_MATCHES_FAILURE:
            return {...state, loading: false};
        default:
            return state;    
    }
}