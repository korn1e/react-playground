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
      ]
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

    render() {
        return (
            // custom component should have capital 1st letter (naming conventional)
            // lower case 1st letter usually for reserved/internal component
            // passing method reference between components using "click" property
            // 2 ways for passing argument on referenced method:
            // 1: use anonymous function -> inefficient (performance)
            // 2: use bind -> RECOMMENDED!!!
            <div className="App">
                <h1>Hi, I'm a react app</h1>
                <button onClick={() => this.switchNameHandler('Ajigile')}>Change Data</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Aji Perdana')}>My hobby is eat a lot</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
            //equivalent
            //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
        );
    }
}

export default App;
