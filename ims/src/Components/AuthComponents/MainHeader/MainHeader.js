import React, { useEffect } from 'react';
import { /*MagnifyingGlass , */ RotatingLines } from 'react-loader-spinner'


const MainHeader = (props) => {

    const renderText = "Redirecting to Login page";
    useEffect(()=>{
        const timeout = setTimeout(() => {
            window.location.replace('/login/nav');
        } , 3000);
        return() => clearTimeout(timeout);
    } , []);

    return (
    <React.Fragment>

        <h1>{renderText}</h1>
        {/* <MagnifyingGlass
            visible={true}
            height="120"
            width="120"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor = '#c0efff'
            color = '#e15b64'
        /> */}
        <RotatingLines
            strokeColor="#000000"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
    </React.Fragment>
    )
}

export default MainHeader