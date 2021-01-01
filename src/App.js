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

    switchNameHandler = (newName) => {
        console.log('switchNameHandler clicked!');

        // Do not mutate state directly. Use setState()
        // react/no-direct-mutation-state
        //this.state.persons[0].name = 'Aji Perdana Putra';

        //use built-in method (setState)
        this.setState({persons: [
                {name: newName, age:39},
                {name: 'Bina', age:38},
                {name: 'Wira', age:22}
            ]});
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Aji', age:39},
                {name: event.target.value, age:38},
                {name: 'Wira', age:34}
            ]
        });
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
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Aji Perdana')}
                        changed={this.nameChangeHandler}>My hobby is eat a lot</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
                </div>
            );
        }

        return (
            // custom component should have capital 1st letter (naming conventional)
            // lower case 1st letter usually for reserved/internal component
            // passing method reference between components using "click" property
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
