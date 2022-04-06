import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const Tricks = ({tricks}) => {
    const trickCards = tricks.map(trick => {
        return (
            <TrickCard
                name={trick.name}
                stance={trick.stance}
                obstacle={trick.obstacle}
                tutorial={trick.tutorial}
                id={trick.id}
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