import React from 'react'
import { useState , useEffect} from 'react';
import Card from '../UI/Card';
import classes from './Login.module.css'
import Button from '../UI/Button';

const Login = (props) => {

    const [enteredEmail , setEnteredEmail] = useState('');
    const [emailIsValid , setEmailIsValid] = useState();
    const [enteredPassword , setEnteredPassword] = useState('');
    const [passwordIsValid , setPasswordIsValid] = useState();
    const [formIsValid , setFormIsValid] = useState(false);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            console.log('Checking form validity!');
            setFormIsValid(
                enteredEmail.includes('@') && enteredPassword.trim().length > 6
            );
        } , 500);
        return () => {
            console.log('CLEANUP');
            clearTimeout(timeout);
          };
    } , [enteredEmail , enteredPassword]);



    const emailChangeHandler = (event)=>{
        setEnteredEmail(event.target.value);
    }
    const passwordChangeHandler = (event)=>{
        setEnteredPassword(event.target.value);
    }
    const validateEmailHandler = () => {
      // console.log('Email validator!');
        // console.log(enteredEmail);
        setEmailIsValid(enteredEmail.includes('@'));
    }
    const validatePasswordHandler = () => {
        // console.log('password validator!');
        // console.log(enteredPassword);
        setPasswordIsValid(enteredPassword.trim().length > 6)
    }
    const submitHandler = (event) => {
      // event.preventDefault();  
      // console.log(enteredEmail);
      props.newOnLogin(enteredEmail , enteredPassword);
    }
    

  return (
    <Card className={classes.login}>
        <h1>✦✧✦ It's Time to Login ✦✧✦</h1>
        <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            required
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <br />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid} onClick={props.newOnLogin} >
            Login
          </Button>
        </div>
        
        <br/>
        {(props.isLoggedIn === true) ? "You are Already Loggedin  | " : "You are not loggedin | "}<a href='/signup'>signup</a> 
        
        </form>
    </Card>
  )
}

export default Login