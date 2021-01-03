import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    constructor(props) {
        super(props);
        // any custom logic
        console.log('[App.js] constructor');
    }

    //built-in property
    state = {
        persons: [
            {id:'id1', name: 'Aji', age:39},
            {id:'id2', name: 'Bina', age:38},
            {id:'id3', name: 'Wira', age:34}
        ],
        otherData: 'other value',
        showPersons: false
    };

    static getDerivedStateFromProps(props, state){
        // do any state modification if needed
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }


    nameChangeHandler = (event, id) => {
        // equivalent to (java lambda): stream, find first, index
        const personIndex = this.state.persons.findIndex(person => person.id === id);

        //create a copy from immutable object
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        //create a copy from immutable array object
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        // not a recommended way of modifying state object
        /*
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
        */

        // RECOMMENDED way
        //const persons = this.state.persons.slice();   // option1: COPY the full object and return new one
        const persons = [...this.state.persons];        // option2: COPY the full object using spread operator (...) -> more modern way
        persons.splice(personIndex, 1); // safely update the new object
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const isShown = this.state.showPersons;
        this.setState({showPersons: !isShown});
    }

    render() {
        console.log('[App.js] render');
        let persons = null;
        if(this.state.showPersons){
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler} />
        }

        return (
            // custom component should have capital 1st letter (naming conventional)
            // lower case 1st letter usually for reserved/internal component
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
            //equivalent
            //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
        );
    }

    //DEPRECATED
    //componentWillMount() {
    //    console.log('[App.js] componentWillMount');
    //}

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }
}

export default App;
