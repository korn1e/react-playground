import React, {Component} from 'react';
import Person from "../Persons/Person/Person";

class Persons extends Component{

    // don't use it if you do not initiate/modify state during initialization
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        //return null; // return snapshot value or null
        return {message: 'Ajigile Snapshot!'}; // return snapshot value or null
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) =>
            <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
}

export default Persons;



// const persons = (props) => {
//     console.log('[Persons.js] rendering...');
//     return props.persons.map((person, index) =>
//         <Person
//             click={() => props.clicked(index)}
//             name={person.name}
//             age={person.age}
//             key={person.id}
//             changed={(event) => props.changed(event, person.id)} />
//     );
// }
//
// export default persons;