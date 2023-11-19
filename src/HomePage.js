import React from 'react';
import Logo from '../src/Images/HelpLogo.png';

const HomePage = () => {
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log("Button clicked!");
  };

  return (
    <div className="logo-area">
      <button onClick={handleButtonClick} className="logo-button">
        <img src={Logo} alt="My Logo" className="logo" />
      </button>
      <h1>Welcome to the Help App!</h1>
      <h3>An easy-to-use application that keeps your family connected</h3>
      {/* Other content of your home page */}
    </div>
  );
};

export default HomePage;
