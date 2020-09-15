import DisplayNumber from "../components/displaynumber/DisplayNumber";
import {connect} from 'react-redux'

/* Redux Store 의 State 값이 변경될 때 마다 호출 */
const mapStateToProps = state => {
    return {
        number: state.number
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayNumber);

/*
import React, {useEffect, useState} from "react";
import store from "../components/redux/store";

export default () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        store.subscribe(() => {
            setNumber(store.getState().number);
        });
    }, []);

    return (
        <DisplayNumber number={number}/>
    );
}*/
