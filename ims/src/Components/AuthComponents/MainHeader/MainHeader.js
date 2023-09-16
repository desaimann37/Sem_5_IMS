import React, { useEffect } from 'react';
// import Navigation from './Navigation';

const MainHeader = (props) => {

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            window.location.replace('/login/nav');
        } , 3000);
        return() => clearTimeout(timeout);
    });
  return (
    <header>
        <h1>Redirecting to anothr page...</h1>
        {/* <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} /> */}
    </header>
    )
}

export default MainHeader