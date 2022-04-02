import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { getAllMatches } from '../actions/allMatchesActions';
import "../styles/Home.css";
import ball from "../assets/ball.png";

const Home = ({getAllMatches, loading, leagues}) => {

    const navigate = useNavigate()
    
    useEffect(() => {
        getAllMatches();
    },[getAllMatches]);

    if (loading){
        return <div className='ball'><img src={ball} alt="spinning-loading-ball"/></div>;
    }

    return (
        <div className='home'>
            {leagues.map(league => {
                return (
                    <div 
                        onClick={() => navigate(`/leagues/${league.id}`)}
                        className="league-names-div"
                        key={league.id}>
                        <div>{league.name}</div>
                    </div> 
                )   
            })}
        </div>
    )
}    

const mapStateToProps = state => {
    return {
        leagues:state.allMatchesReducer.leagues,
        loading: state.allMatchesReducer.loading
    }
}

export default connect(mapStateToProps,{getAllMatches}) (Home)