import React from 'react';
import './UserInput.css';

const userInput = (props)=> {
    const inputStyle = {
        border: '2px solid red'
    };

    return (
        <input type = "text" style={inputStyle} value= {props.val} onChange={props.handler}></input>
    );
}


export default userInput;
