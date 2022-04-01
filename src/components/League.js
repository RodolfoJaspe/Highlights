import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Match from './Match';
import {useParams} from "react-router-dom";
import { getLeagueMatches } from '../actions/LeagueActions.js';
import ball from "../assets/ball.png";
import "./League.css"


const League = ({getLeagueMatches, loading, matches}) => {
    const {id} = useParams()

    useEffect(() => {
        getLeagueMatches(id);
    },[getLeagueMatches]); 

    console.log(matches,id)
    if (loading){
        return <div className='ball'><img src={ball}/></div>
    }
 
    return (
        <div className='matches'>
            {/* <h2>{matches[0].competition.name}</h2> */}
            {matches.map(match => (
                <Match match={match} key={match.title}/>
            ))} 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        matches: state.LeagueReducer.matches,
        loading: state.LeagueReducer.loading
    }
}

export default connect(mapStateToProps, {getLeagueMatches})(League)