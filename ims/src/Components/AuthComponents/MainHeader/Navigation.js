import React from 'react';
import Login from '../Login/Login';
import Home from '../../../UI/Home';

const Navigation = (props) => {
  return (
    <nav>
        <ul>
            {!props.isLoggedIn && (
                <Login onLogin={props.loginHandler} />
            )}
            {!props.isLoggedIn && (
                <Home/>
            )}
        </ul>
    </nav>
    )
}

export default Navigation