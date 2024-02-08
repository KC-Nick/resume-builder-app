import React from 'react';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const LandingPage = () => {
  const [isLoggingIn, setIsLoggingIn] = React.useState(true);

  const handleLoginClick = () => {
    setIsLoggingIn(true);
  };

  const handleSignupClick = () => {
    setIsLoggingIn(false);
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Log In</button>
      <button onClick={handleSignupClick}>Sign Up</button>
      {isLoggingIn ? <Login /> : <Signup />}
    </div>
  );
};

export default LandingPage;