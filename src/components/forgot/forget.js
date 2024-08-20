import React, { useState } from 'react';
import './forget.css'; 

const ForgetPasswordForm = () => {
  const [signUpError, setSignUpError] = useState('');
  const [formInput, setFormInput] = useState({
    password: '',
    confirmPassword: '',
  });
  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  const handelforget =async(event)=>{
    event.preventDefault();
    let responseData;
    await fetch("http://localhost:4000/forgotpass", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput)
    }).then((res) => res.json()).then((data) => { responseData = data });

    if (responseData.success) {
      window.location.replace("/LoginSignUP");
    } else {
      console.log(responseData);
      setSignUpError(responseData.error);
    }

  }
  return (
    <div className='body border-box'>
    <div className="container-l" id="main">
      <div className="forgeet-password">
        <form onSubmit={handelforget} >
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
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ForgetPasswordForm;
