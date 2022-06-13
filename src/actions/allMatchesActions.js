import axios from "axios";

export const FETCHING_ALL_MATCHES_START= "FETCHING_ALL_MATCHES_START";
export const FETCHING_ALL_MATCHES_SUCCESS= "FETCHING_ALL_MATCHES_SUCCESS";
export const FETCHING_ALL_MATCHES_FAILURE= "FETCHING_ALL_MATCHES_FAILURE";


const headers = {
    Accept: "application/json"
}
export const getAllMatches = () => dispatch => {
    dispatch({type: FETCHING_ALL_MATCHES_START});

    axios.get("https://www.scorebat.com/video-api/v1/", {headers})
    .then(res => {
        const allMatches= res.data
        let allLeagues = allMatches.map(match => {
            return (match.competition)
        })
        var filterLeagues = allLeagues.reduce((accumalator, current) => {
            if (
              !accumalator.some(
                (league) => league.id === current.id && league.name === current.name
              )
            ) {
              accumalator.push(current);
            }
            return accumalator;
          }, []);
          const payload = {
            allMatches: allMatches,
              leagues: filterLeagues
          }
        dispatch({type: FETCHING_ALL_MATCHES_SUCCESS, payload: payload})
    })
    .catch(err => {  
        dispatch({type: FETCHING_ALL_MATCHES_FAILURE, payload: err})
})
}