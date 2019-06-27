import React from 'react';
import './UserOutput.css';

const userOutput = (props)=> {
    return (
        <div className="para">
            <p > Hi I am {props.username} </p>
            <p> {props.children}</p>
       </div>
    );
}


export default userOutput;
