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
    const signupSubmitHandler = async (event) => {

        event.preventDefault();
        // console.log(enteredEmail , enteredPassword);
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        
        emailError.textContent = '';
        passwordError.textContent = '';

        const email = enteredEmail;
        const password = enteredPassword;
        try{
            const res = await fetch('http://localhost:9000/signup' , {
                method: 'POST',
                body: JSON.stringify({email , password}),
                headers: {'Content-Type' : 'application/json'}
            });
            const data = await res.json();
            console.log(data);
            if(data.errors){
                emailError.textContent = data.errors.email;
                passwordError.textContent = data.errors.password;
            }
            if(data.user){
                window.location.assign('/signup-confirmation');
            }
        }catch(err){
            console.log(err);
        }

        //Redirecting to Successfull Signup
        // window.location.replace("/signup-confirmation");
    }

  return (
    <Card className={classes.login}>
        <form>
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

            <div className="email error"></div>
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
            <div className="password error"></div>
            </div>
            <br/>
            
            <Button className={classes.btn} onClick={signupSubmitHandler} disabled={!formIsValid} >SignUp
            </Button>
            {/* {(props.isAuthenticated === true) ? "You are Already Loggedin  | " : "You are not loggedin | "}  */}

            <br/>
            <br/>
            {"Already an user? | "}<a href='/login/nav'>login</a> 
        </form>
    </Card>
    )
}

export default Signup