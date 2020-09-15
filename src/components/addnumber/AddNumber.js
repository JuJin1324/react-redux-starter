import React, {useState} from "react";

const AddNumber = props => {
    const {onClick} = props;
    const [size, setSize] = useState(1);

    const handleChange = (event) => {
        setSize(Number(event.target.value));
    }

    const handleClick = () => {
        onClick(size);
    }


    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={handleClick}/>
            <input type="text" value={size} onChange={handleChange}/>
        </div>
    );
}

export default AddNumber;