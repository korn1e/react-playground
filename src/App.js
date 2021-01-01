import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {

    //built-in property
    state = {
        persons: [
            {name: 'Aji', age:39},
            {name: 'Bina', age:38},
            {name: 'Wira', age:34}
        ],
        otherData: 'other value',
        showPersons: false
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Aji', age:39},
                {name: event.target.value, age:38},
                {name: 'Wira', age:34}
            ]
        });
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const isShown = this.state.showPersons;
        this.setState({showPersons: !isShown});
    }

    render() {

        const btnInlineStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    { this.state.persons.map((person, index)=>{
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
        }

        return (
            // custom component should have capital 1st letter (naming conventional)
            // lower case 1st letter usually for reserved/internal component
            <div className="App">
                <h1>Hi, I'm a react app</h1>
                <button
                    style={btnInlineStyle}
                    onClick={this.togglePersonsHandler}>Change Data</button>
                {persons}
            </div>
            //equivalent
            //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
        );
    }
}

export default App;
