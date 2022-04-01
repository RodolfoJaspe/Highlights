import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { getAllMatches } from '../actions/allMatchesActions';
import "./Home.css";
import ball from "../assets/ball.png";

const Home = ({getAllMatches, loading, matches}) => {

    const navigate = useNavigate()
    
    useEffect(() => {
        getAllMatches();
    },[getAllMatches]);
    const leagues = []
    matches.map(match => {
        if(!leagues.includes(match.competition.id)){
            leagues.push(match.competition.id)
            leagues.push(match.competition)
        }
    })
    console.log(leagues)
    if (loading){
        return <div className='ball'><img src={ball}/></div>;
    }
    return (
        <div 
            className='home' 
        >
            {leagues.map(league => {
                if(league.name){
                    return (
                        <div 
                            onClick={() => navigate(`/leagues/${league.id}`)}
                            className="league-names-div">
                            <h3>{league.name}</h3>
                        </div> 
                    )   
                }
            })}
        </div>
    )
}    

const mapStateToProps = state => {
    return {
        matches: state.allMatchesReducer.matches,
        loading: state.allMatchesReducer.loading
    }
}

export default connect(mapStateToProps,{getAllMatches}) (Home)