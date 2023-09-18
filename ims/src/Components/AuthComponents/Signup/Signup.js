import React from 'react'
import Card from '../UI/Card';
import Button from './Button';
import classes from '../Login/Login.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Signup = (props) => {
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
    const signupSubmitHandler = (event) => {
        const email = enteredEmail;
        const password = enteredPassword;
        console.log(email , password);
    }

  return (
    <Card className={classes.login}>
        <form onSubmit={signupSubmitHandler}>
            <h2>◆◇◆ New Connection ◆◇◆</h2>
            <div
            className={`${classes.control} ${
                emailIsValid === false ? classes.invalid : ''
            }`}
            >
            <label htmlFor="email" name="email">Email</label>
            <input type="email"
                id="email"
                name="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                required
            />
            </div>

            <div class="email error"></div>
            <div
            className={`${classes.control} ${
                passwordIsValid === false ? classes.invalid : ''
            }`}
            >
            <br />
            <label htmlFor="password" name="password">Password</label>
            <input type="password"
                id="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler} 
                name="password"
            />
            <div class="password error"></div>
            </div>
            <br/>
            <Button type="submit" className={classes.btn} onClick={props.onSignup} disabled={!formIsValid}>SignUp</Button>
            <br/>
            <br/>
            {"Already an user? | "}<a href='/login/nav'>login</a> 
        </form>
    </Card>
    )
}

export default Signup