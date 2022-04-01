import {FETCHING_LEAGUE_MATCHES_START, FETCHING_LEAGUE_MATCHES_SUCCESS, FETCHING_LEAGUE_MATCHES_FAILURE} from "../actions/LeagueActions";

const initialState = {
    loading: false,
    matches: []
}

export const LeagueReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_LEAGUE_MATCHES_START:
            return {...state, loading: true };
        case FETCHING_LEAGUE_MATCHES_SUCCESS:
            return {...state, loading: false, matches: action.payload};
        case FETCHING_LEAGUE_MATCHES_FAILURE:
            return {...state, loading: false};
        default:
            return state;    
    }
}