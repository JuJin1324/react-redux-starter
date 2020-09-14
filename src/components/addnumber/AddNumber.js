import React, {useState} from "react";
import store, {TYPE_INCREMENT} from "../redux/store";

const AddNumber = () => {
    const [size, setSize] = useState(1);

    const handleChange = (event) => {
        setSize(Number(event.target.value));
    }
    const handleClick = () => {
        store.dispatch({type:TYPE_INCREMENT, size: size});
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