import React from 'react';
import '../styles/Match.css';

const Match = (props) => {
    const gameEmbed = props.match.embed;

    const titleArray = props.match.title.split(" - ")

    return (
        <div className="match" >
            <div className='match-inner'>
                <div className='title'>
                    <p>{titleArray[0]}</p>
                    <div className='vs'>VS</div>
                    <p>{titleArray[1]}</p>
                </div>
                <div 
                    className='video'
                    dangerouslySetInnerHTML={{__html:gameEmbed}}>
                </div> 
            </div>
        </div>

    )
}

export default Match
