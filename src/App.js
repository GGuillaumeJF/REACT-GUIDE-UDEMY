import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      { name: "Max" , age: 28},
      { name: "Manu" , age: 29},
      { name: "Stéphanie" , age: 26}            
    ],
    otherState : 'Some other value',
    showPersons : false
  };

  swicthNameHandler = (newName) => {
    //console.log('Was clicked!');
    this.setState({
      persons : [
        { name: newName , age: 28},
        { name: "Manu" , age: 29},
        { name: "Stéphanie" , age: 27}            
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name: "Max" , age: 28},
        { name: event.target.value , age: 29},
        { name: "Stéphanie" , age: 26}            
      ]
      })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working !</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {
          this.state.showPersons ? 
          <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.swicthNameHandler.bind(this,'Max!')}
            changed={this.nameChangedHandler}>
            My Hobbies : Racing </Person> 
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> : null        
        }        
      </div>
    );
  }
}

export default App;


// const app = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('Was clicked!');
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing </Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
// };

// export default app;


