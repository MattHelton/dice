import React from 'react';
import './rollButton.css'

const RollButton = (props) => {
    return (  
        <button onClick={props.onClick}>Roll</button>
    );
}
 
export default RollButton;