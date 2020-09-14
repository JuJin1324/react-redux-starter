import React, {useState} from "react";
import store from "../redux/store";

const AddNumber = props => {
    const [size, setSize] = useState(1);

    const handleChange = (event) => {
        setSize(Number(event.target.value));
    }
    const handleClick = () => {
        props.onClick(size);
        store.dispatch({type:'INCREMENT', size: size});
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