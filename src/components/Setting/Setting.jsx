import React, { useState } from 'react';
import './Setting.css'; 

const Setting = () => {
  const [username, setUsername] = useState('');
  const token=localStorage.getItem("auth-token");

   const [formData, setFormData] = useState({
    newEmail:"",
    confirmMail:"",
    token:token
  });

  const changeHandler = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const handleEmailSubmit = async () => {
    console.log(formData)
    let responseData;
    await fetch("http://localhost:4000/changemail", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => (responseData = data));


    alert("Email Changed")
    
   return responseData;
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className='body-1 border-box'>
    <div className="container-ll">
      <div className="form-section mt-5">
        <h1 className=' text-3xl'>Change UserName</h1>
        <form>
          <input 
            type="text" 
            placeholder="Enter new username" 
            value={username} 
            onChange={handleUsernameChange} 
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
      <div className="form-section mt-5">
        <h1 className=' text-3xl'>Change Email</h1>
        <form onSubmit={handleEmailSubmit}>
          <input 
            type="email" 
            placeholder="Enter new email address"
            name='newEmail' 
            value={FormData.newEmail} 
            onChange={changeHandler} 
          />
          <input 
            type="email" 
            placeholder="Re-enter new email address" 
            name='confirmMail'
            value={FormData.confirmMail} 
            onChange={changeHandler} 
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Setting;
