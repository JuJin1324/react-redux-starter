import React, {useEffect, useState} from "react";
import store from "../redux/store";

const DisplayNumber = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        store.subscribe(() => {
            setNumber(store.getState().number);
        });
    }, []);

    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" value={number} readOnly/>
        </div>
    );
}

export default DisplayNumber;