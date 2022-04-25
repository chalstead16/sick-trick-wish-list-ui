import React from "react";
import TrickCard from '../TrickCard/TrickCard';
import './Tricks.css';

const Tricks = ({tricks}) => {
    const trickCards = tricks.map(trick => {
        return (
            <TrickCard
                {...trick}
                key={trick.id}
            />
        )
    })

    return (
        <div className='tricks-container'>
            {trickCards}
        </div>
    )
}

export default Tricks;