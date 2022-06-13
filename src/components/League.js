import React from 'react';
import { connect } from 'react-redux';
import Match from './Match';
import {useParams} from "react-router-dom";
import ball from "../assets/ball.png";
import "../styles/League.css"


const League = ({loading, allMatches}) => {
    const {id} = useParams()

    const leagueMatches = allMatches.filter(
        match => match.competition.id === parseInt(id)
    )

    if (loading){
        return <div className='ball'><img src={ball} alt="spinning-loading-ball"/></div>
    }
 
    return (
        <div className='matches'>
            <div className='competition-name'>{leagueMatches[0].competition.name}</div> 
            {leagueMatches.map(match => (
                <Match match={match} key={match.title}/>
            ))} 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allMatches: state.allMatchesReducer.allMatches,
        loading: state.allMatchesReducer.loading
    }
}

export default connect(mapStateToProps, {})(League)