import React, { useState } from 'react';
// Hooks start with use* keyword

//import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

const app = props => {

    // useState returns array:
    // 0: reference to access the state
    // 1: function that allowed to modify the state
    // use "[personsState, setPersonsState]" instead of "stateArr"
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Aji', age:39},
            {name: 'Bina', age:38},
            {name: 'Wira', age:34}
        ],
        otherData: 'other value'
    });

    const [otherState, setOtherState] = useState('other statue value');

    // you can use as many 'useState' as you want, and it does not have to be a JSON object.

    console.log(personsState, otherState);

    // define function inside function
    const switchNameHandler = () => {
        console.log('switchNameHandler clicked!');

        // Do not mutate state directly. Use setState()
        // react/no-direct-mutation-state
        //personsState.persons[0].name = 'Aji Perdana Putra';

        // Rect Hook DOES NOT MERGE the data....instead, it will replace the data
        // -> copy the old "otherData"
        setPersonsState({persons: [
                {name: 'Aji Perdana Putra', age:39},
                {name: 'Bina', age:38},
                {name: 'Wira', age:22}
            ],
            otherData: personsState.otherData
        });
    }


    return (
        // custom component should have capital 1st letter (naming conventional)
        // lower case 1st letter usually for reserved/internal component
        <div className="App">
            <h1>Hi, I'm a react app</h1>
            <button onClick={switchNameHandler}>Change Data</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby is eat a lot</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
        //equivalent
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
    );

}

export default app;


