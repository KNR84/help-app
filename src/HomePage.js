import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../src/Images/HelpLogo.png';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="logo-area">
    <div className="information" />

    <button onClick={handleButtonClick} className="logo-button" title="Home">
      <img src={Logo} alt="My Logo" className="logo" />
    </button>

    <div className="welcome-container">
      <h1 className="welcome-text">Welcome to the Help App!</h1>
    </div>

    <footer className="homepage-footer">
      <h3>
A user-friendly app designed to keep your family seamlessly connected.</h3>
    </footer>
  </div>
);
};
    

   

export default HomePage;
