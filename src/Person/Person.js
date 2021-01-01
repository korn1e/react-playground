import React from "react";

// functional based component
const person = (props) => {
    return (
        // must return single root element
        // passing method reference between components using "click" property
        <div>
            <p onClick={props.click}>I'm {props.name}, and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;