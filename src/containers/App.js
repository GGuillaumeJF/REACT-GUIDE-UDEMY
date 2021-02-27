import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  };

  state = {
    persons : [
      {id : 'ipe45' , name: "Max" , age: 28},
      {id : 'grs64' , name: "Manu" , age: 29},
      {id : 'wde99' , name: "Stéphanie" , age: 26}            
    ],
    otherState : 'Some other value',
    showPersons : false,
    showCockpit : true,
    changeCounter : 0,
    authanticated : false
  };

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  };

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  };

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  };

  shouldComponentUpdate(nextProps,nextState) {
    console.log('[Apps.js] shouldComponentUpdate');
    return true;
    };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { 
      ...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person ; 

    this.setState((prevState,props) => {
      return {
        persons : persons ,
        changeCounter : prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  loginHandler = () => {
    this.setState({authanticated:true});
  };

  render() {
    console.log('[Appp.js] render');
    let persons = null;
    

    if (this.state.showPersons) {
      persons =  <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          isAuthenticated = {this.state.authanticated}
          />          
    }


    return (      
        <Aux>
          <button
            onClick = {() => {
              this.setState({showCockpit:false})
            }}
          >
            Remove Cockpit
          </button>
          {this.state.showCockpit ? (
          <Cockpit
          Title = {this.props.appTitle}
          showPersons = {this.state.showPersons}
          personsLength = {this.state.persons.length}
          clicked = {this.togglePersonsHandler}            
          login = {this.loginHandler}  
          /> 
          ) : null}
          {persons}              
        </Aux>
      
    );
  }
}

export default withClass(App,classes.App);
