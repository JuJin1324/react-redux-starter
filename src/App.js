import React, {useState} from 'react';
import './App.css';
import AddNumberRoot from "./components/addnumber/AddNumberRoot";
import DisplayNumberRoot from "./components/displaynumber/DisplayNumberRoot";

const App = () => {
    const [number, setNumber] = useState(0);

    const addNumber = (num) => {
        setNumber(number + num);
    }

    return (
        <div className="App">
            <h1>Root</h1>
            <AddNumberRoot onClick={addNumber}/>
            <DisplayNumberRoot number={number}/>
        </div>
    );
}

export default App;
