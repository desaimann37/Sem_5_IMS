// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NotFound.css'; // Create a CSS file for your NotFound component styles
import notFoundImage from '../img/github.jpg';

function NotFound() {
  return (
    <>    
    {/* Add image here */}
    <div className="not-found-container">
      <div className="not-found-content">
        <img src={notFoundImage} alt="Not Found" className="not-found-image" />
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-text">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="not-found-link">
          Go back to the Home Page
        </Link>
      </div>
    </div>
    </>
  );
}

export default NotFound;
