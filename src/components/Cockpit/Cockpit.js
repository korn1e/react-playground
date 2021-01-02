import React from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {

    //const btnClasses = [classes.Button];
    let btnClasses = '';
    if(props.showPersons){
        btnClasses = classes.Red;
    }

    const classNames = [];
    if(props.persons.length <= 2){
        classNames.push(classes.red); // classNames = ['red']
    }
    if(props.persons.length <= 1) {
        classNames.push(classes.bold); // classNames = ['red', 'bold']
    }


    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a react app</h1>
            <p className={classNames.join(' ')}>This is really working!</p>
            <button className={btnClasses} onClick={props.clicked}>Change Data</button>
        </div>
    );
}

export default cockpit;

