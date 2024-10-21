import React, { useState } from 'react';
import './style.css';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formInput, setFormInput] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    confirmPassword: '',
  });
  const [signUpError, setSignUpError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setSignUpError('');
  };
  
  const handleLoginClick = () => {
    setIsSignUp(false);
    setLoginError('');
  };

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const signUp = async (event) => {
    event.preventDefault();
    if (formInput.password !== formInput.confirmPassword) {
      setSignUpError('Passwords do not match');
      return;
    }

    console.log("signUp");
    let responseData;
    await fetch("https://abiv.rnpsoft.com/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput)
    }).then((res) => res.json()).then((data) => { responseData = data });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      localStorage.setItem("user-data",formInput)
      window.location.replace("/");
    } else {
      setSignUpError(responseData.error);
    }
  };

  const login = async (event) => {
    event.preventDefault();
    console.log(formInput);
    let responseData;
    await fetch("https://abiv.rnpsoft.com/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput)
    }).then((res) => res.json()).then((data) => { responseData = data });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      localStorage.setItem("user-data",formInput)
      window.location.replace("/");
    } else {
      console.log(responseData);
      setLoginError(responseData.error);
    }
  };
  const handelForgetPassword =async(event)=>{
    event.preventDefault();
    let responseData;
    await fetch("https://abiv.rnpsoft.com/findUser", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput)
    }).then((res) => res.json()).then((data) => { responseData = data });
    if (responseData.success) {
      window.location.replace("/forget");
    } else {
      console.log(responseData);
      setLoginError(responseData.error);
    }
  }

  return (
    <div className='body border-box'>
      <div className={`container-l ${isSignUp ? 'right-panel-active' : ''}`} id="main">
        <div className="sign-up">
          <form onSubmit={signUp}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formInput.email}
              onChange={(e) => handleUserInput('email', e.target.value)}
              required
            />
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formInput.first_name}
              onChange={(e) => handleUserInput('first_name', e.target.value)}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formInput.last_name}
              onChange={(e) => handleUserInput('last_name', e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formInput.password}
              onChange={(e) => handleUserInput('password', e.target.value)}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-Enter Password"
              value={formInput.confirmPassword}
              onChange={(e) => handleUserInput('confirmPassword', e.target.value)}
              required
            />
            {signUpError && <p className="error-message">{signUpError}</p>}
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={login}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formInput.email}
              onChange={(e) => handleUserInput('email', e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formInput.password}
              onChange={(e) => handleUserInput('password', e.target.value)}
              required
            />
            {loginError && <p className="error-message">{loginError}</p>}
            <button type="submit">Login</button>
            <p className="forget-password" onClick={handelForgetPassword}>
              Forgot Password?
            </p>
            <div className="divider">
              <span className="or-text">OR</span>
            </div>
            <div className="social-media">
              <a href="/facebook" className="social">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/google" className="social">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login</p>
              <button id="login" onClick={handleLoginClick}>
                Login
              </button>
            </div>
            <div className="overlay-right">
              <h1>Welcome</h1>
              <p>Don't Have an account? Register yourself</p>
              <button id="sign-up" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
