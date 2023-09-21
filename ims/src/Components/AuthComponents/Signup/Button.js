import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = (props) => {

  return (
    <Link to="/signup-confirmation">
    <button
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
    </Link>

  );
};

export default Button;


