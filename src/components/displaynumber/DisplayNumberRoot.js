import React from "react";
import DisplayNumber from "./DisplayNumber";

const DisplayNumberRoot = props => {
    const {number} = props;

    return (
        <div>
            <h1>Display Number Root</h1>
            <DisplayNumber number={number}/>
        </div>
    );
}

export default DisplayNumberRoot;