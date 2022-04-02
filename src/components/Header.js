import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Header.css";
import {useNavigate} from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();

    return (
        <div className='header-outer'>
            <div className='home-button-outer'>
                <div className="app-name" onClick={() => navigate("/")}>Hilites</div>       
            </div>
            <header>
                <Link to="/leagues/15">Premier League</Link>
                <Link to="/leagues/14">La Liga</Link>
                <Link to="/leagues/13">Serie A</Link>
                <Link to="/leagues/11">Bundesliga</Link>
            </header>
        </div>
    )
}

export default Header