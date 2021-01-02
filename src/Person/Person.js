import React from "react";
import Radium from 'radium';
import './Person.css';

// functional based component
const person = (props) => {

    // adjust the px values according to your monitor resolution to see the difference
    const inlinePersonStyle = {
        '@media (min-width: 1000px)': {
            width: '800px'
        }
    };

    return (
        // must return single root element
        <div className="Person" style={inlinePersonStyle}>
            <p onClick={props.click}>I'm {props.name}, and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default Radium(person);