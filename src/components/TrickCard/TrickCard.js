import React from "react";
import './TrickCard.css';

const TrickCard = ({stance, name, obstacle, tutorial}) => {
    return (
        <div className='card'>
            <p>{stance} {name}</p>
            <p>Obstacle: {obstacle}</p>
            <p>Link to Tutorial:</p>
            <p>{tutorial}</p>
        </div>
    )
}

export default TrickCard;