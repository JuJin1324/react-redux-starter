import AddNumber from "../components/addnumber/AddNumber";
import React from "react";
import {connect} from "react-redux";

/* returhn 하는 객체를 AddNumber Component에 props로 넘김 */
const mapDispatchToProps = dispatch => {
    return {
        onClick: size => {
            dispatch({type: 'INCREMENT', size: size});
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNumber);

// export default () => {
//     const handleClick = (size) => {
//         store.dispatch({type:TYPE_INCREMENT, size: size});
//     }
//
//     return (
//         <AddNumber onClick={handleClick}/>
//     );
// }
