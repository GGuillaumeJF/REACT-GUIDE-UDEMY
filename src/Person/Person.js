import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    
    const style = {
        '@media (min-width: 500px)' : {            
            width: '450px'          
        }
    };
    
    return (
        <div onClick={props.click} className="Person" style={style}>
            <p>I'm a {props.name} and I have {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);


