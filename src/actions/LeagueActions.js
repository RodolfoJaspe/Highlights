import axios from "axios";

export const FETCHING_LEAGUE_MATCHES_START= "FETCHING_LEAGUE_MATCHES_START";
export const FETCHING_LEAGUE_MATCHES_SUCCESS= "FETCHING_LEAGUE_MATCHES_SUCCESS";
export const FETCHING_LEAGUE_MATCHES_FAILURE= "FETCHING_LEAGUE_MATCHES_FAILURE";


const headers = {
    Accept: "application/json"
}

export const getLeagueMatches = (id) => dispatch => {
    dispatch({type: FETCHING_LEAGUE_MATCHES_START});
    console.log(id)
    axios.get("https://www.scorebat.com/video-api/v1/", {headers})
    .then(res => {
        console.log(res)
        const LeagueMatches = res.data.filter(match => match.competition.id == id)
        console.log(LeagueMatches)
        dispatch({type: FETCHING_LEAGUE_MATCHES_SUCCESS, payload: LeagueMatches})
    })
    .catch(err => {  
        dispatch({type: FETCHING_LEAGUE_MATCHES_FAILURE, payload: err})
   })

}