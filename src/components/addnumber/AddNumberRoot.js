import React from "react";
import AddNumber from "./AddNumber";

const AddNumberRoot = props => {
    const handleClick = (size) => {
        props.onClick(size);
    }

    return (
        <div>
            <h1>Add Number Root</h1>
            <AddNumber onClick={handleClick}/>
        </div>
    );
}

export default AddNumberRoot;