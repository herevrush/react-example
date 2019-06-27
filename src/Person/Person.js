import React, { Component } from 'react';
import './Person.css';
// import radium from 'radium';

const person = (props)=> {
    const style = {
        // '@media (min-width: 500px)':{
        //     width :'450px'
        // }
    };
    return (
        <div className="person" style={style}>
            <p onClick={props.handler}> Hi I am {props.name} and of age {props.age}</p>
            <p> My Hobbies are:{props.children}</p>
            <input type = "text" value= {props.name} onChange={props.changed}></input>
        </div>
    );
}


export default person;
