import React from 'react';

const Input = (props) => <input
    autoComplete="off"
    className="small-rad"
    style={{ ...styles, ...props.style }}
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
/>



const styles = {
    width: '100%',
    padding: '.3rem',
    fontSize: '1rem',
    color: 'black',
    border: '1px solid',
    borderColor: 'white',
    outline: 'none',
    backgroundColor: 'white'
};

export default Input;