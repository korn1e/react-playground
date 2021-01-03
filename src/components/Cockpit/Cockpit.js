import React, {useEffect} from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {

    // useEffect(a, b)
    //a: callback (function)
    //b: DependencyList -> used to determine the callback execution based on update
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        // you can do HTTP request for example
    }, [props.persons]); // only be executed if persons object is updated (e.g. name change)

    // you can use multiple useEffect
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect XXX');
        // you can do HTTP request for example
    }, []); // example that useEffect will be executed once


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
            <h1>{props.title}</h1>
            <p className={classNames.join(' ')}>This is really working!</p>
            <button className={btnClasses} onClick={props.clicked}>Change Data</button>
        </div>
    );
}

export default cockpit;

