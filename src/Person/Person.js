import React from "react";

// functional based component
const person = (props) => {
    return (
        // must return single root element
        <div>
            <p>I'm {props.name}, and I'm {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;