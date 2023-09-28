import React from 'react'
import { useState , useEffect} from 'react';
import Card from '../UI/Card';
import classes from './Login.module.css'
import Button from '../UI/Button';
// import { RotatingLines } from 'react-loader-spinner';

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
    const submitHandler = async(event) => {
      event.preventDefault();  
      // props.newOnLogin(enteredEmail , enteredPassword);

      // console.log(enteredEmail);
      // console.log(enteredPassword);
      const email = enteredEmail;
      const password = enteredPassword;
      const emailError = document.querySelector('.email.error');
      const passwordError = document.querySelector('.password.error');
      //reset errors : 

      emailError.textContent = '';
      passwordError.textContent = '';

      try{
        const res = await fetch('http://localhost:9000/login', {
          method : 'POST',
          body: JSON.stringify({email , password}),
          headers : {'Content-Type' : 'application/json'}
        });
        const data = await res.json();
        console.log(data);
        if(data.errors){
          emailError.textContent = data.errors.email;
          passwordError.textContent = data.errors.password;
        }
        if(data.user){
          await new Promise((resolve) => {
            setTimeout(() => {
              window.location.assign('/');
              resolve();
            }, 2000);
          });
          props.newOnLogin(true);
          window.location.assign("/");
        }
      }catch(err){
        console.log(err);
      }
      // props.newOnLogin(enteredEmail , enteredPassword);
    }
    

  return (
    <Card className={classes.login}>
        <h1>✦✧✦ It's Time to Login ✦✧✦</h1>
        <form>
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
          <div className="email error"></div>

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
          <div className="password error"></div>
        </div>
        <br />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid} onClick={submitHandler}>
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