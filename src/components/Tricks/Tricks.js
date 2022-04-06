import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const Tricks = ({tricks}) => {
    const trickInfo = tricks.map(trick => {
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
}

export default Tricks;