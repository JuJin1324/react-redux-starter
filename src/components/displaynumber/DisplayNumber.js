import React from "react";

const DisplayNumber = props => {
    const {number, unit} = props;

    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" value={number} readOnly/>
            {unit}
        </div>
    );
}

export default DisplayNumber;