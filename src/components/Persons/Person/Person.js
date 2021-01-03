import React, {Component} from "react";

import classes from './Person.css';

// functional based component
class Person extends Component{

    render() {
        console.log('[Person.js] rendering...');
        return (
            // must return single root element
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    I'm {this.props.name}, and I'm {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
};

export default Person;




// functional based component
/*const person = (props) => {
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

export default person;*/