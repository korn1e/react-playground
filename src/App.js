import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium'; // StyleRoot for media queries support

import Person from './Person/Person';

class App extends Component {

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

        const btnInlineStyle = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };
        // with Radium, you can now add pseudo selector

        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    { this.state.persons.map((person, index)=>{
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)} />
                    })}
                </div>
            );
            btnInlineStyle.backgroundColor = 'red';
            btnInlineStyle[':hover'] = {
                backgroundColor: 'salmon',
                    color: 'black'
            }
        }

        const classNames = [];
        if(this.state.persons.length <= 2){
            classNames.push('red'); // classNames = ['red']
        }
        if(this.state.persons.length <= 1) {
            classNames.push('bold'); // classNames = ['red', 'bold']
        }

        return (
            // custom component should have capital 1st letter (naming conventional)
            // lower case 1st letter usually for reserved/internal component
            // <StyleRoot> is required when using media queries
            <StyleRoot>
                <div className="App">
                    <h1>Hi, I'm a react app</h1>
                    <p className={classNames.join(' ')}>This is really working!</p>
                    <button
                        style={btnInlineStyle}
                        onClick={this.togglePersonsHandler}>Change Data</button>
                    {persons}
                </div>
            </StyleRoot>
            //equivalent
            //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
        );
    }
}

export default Radium(App);
