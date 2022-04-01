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
        console.log(res)
        dispatch({type: FETCHING_ALL_MATCHES_SUCCESS, payload: allMatches})
    })
    .catch(err => {  
        dispatch({type: FETCHING_ALL_MATCHES_FAILURE, payload: err})
})
}