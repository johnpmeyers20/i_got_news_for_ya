import React from 'react';

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => (
  <button style={props.style}>
      {props.label}
  </button>
)

export default Button;