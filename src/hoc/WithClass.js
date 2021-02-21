import React from 'react';

const Withclass = (props) => (
    <div className={props.classes}> {props.children} </div>
);

export default Withclass;