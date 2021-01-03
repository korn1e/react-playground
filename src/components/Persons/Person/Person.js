import React from "react";

import classes from './Person.css';

// functional based component
const person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        // must return single root element
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name}, and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;