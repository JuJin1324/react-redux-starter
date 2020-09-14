import React, {useState} from 'react';
import './App.css';
import AddNumberRoot from "./components/addnumber/AddNumberRoot";
import DisplayNumberRoot from "./components/displaynumber/DisplayNumberRoot";

const App = () => {
    return (
        <div className="App">
            <h1>Root</h1>
            <AddNumberRoot />
            <DisplayNumberRoot/>
        </div>
    );
}

export default App;
