import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm a {props.name} and I have {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;

