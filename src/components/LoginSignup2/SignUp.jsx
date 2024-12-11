import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eclipse4 from "../../assets/Ellipse 4.png";
import eclipse2 from "../../assets/Ellipse 2.png";
import eclipse3 from "../../assets/Ellipse 3.png";
import eclipse5 from "../../assets/Ellipse 5.png";
import { Verify } from 'react-puzzle-captcha';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
const SignUp = ({setsign}) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [continueAs, setContinueAs] = useState("");
    const [captcha,setcaptcha]=useState(false)
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setsign(false)
        if(confirmPassword==password){
        if(captcha){
        localStorage.setItem('signup','False')
        // Add any validation or processing logic here
          let c={'email':email, 'firstName':firstName, 'lastName':lastName, 'password':password, 'accounttype': continueAs, 'signinwithgoogle':false}
        fetch("https://abiv.rnpsoft.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(c)
        })
        .then(response => response.json())
        .then(data => {
           localStorage.setItem('auth-token',data.token);
           localStorage.setItem('user-data',JSON.stringify({
            'email':email,
            'firstName':firstName,
            'lastName':lastName,
            'accounttype':continueAs
           }))
           navigate('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        
        // Navigate to the /otp page after form submission
     }else{
            alert("you need to validate captcha")
        }}else{
          alert("Password didn't match with Confirm Password")
        }
    };

    return (
        

        <div className="z-20 text-black w-[552px] h-auto bg-[#d9d9d9] bg-opacity-55 relative rounded-3xl drop-shadow flex justify-center items-center mt-80">
        <form 
          onSubmit={handleSubmit} 
          className="w-[350px] h-auto flex flex-col justify-center items-center gap-y-4 "
        >
          <p className="text-black text-poppins font-medium text-[38.4px] ">Sign Up</p>
      
          {/* Email Input */}
          <label className="w-full">
            Your email
            <input 
              type="email" 
              className="w-full h-[46px] bg-transparent border-black rounded-[12px] border outline-none p-4 mt-30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
      
          {/* Name Inputs */}
          <div className="flex w-full justify-between gap-x-5">
            <label className="w-1/2">
              First Name
              <input 
                type="text" 
                className="w-full h-[26px] bg-transparent border-black rounded-[12px] border outline-none p-4"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label className="w-1/2">
              Last Name
              <input 
                type="text" 
                className="w-full h-[26px] bg-transparent border-black rounded-[12px] border outline-none p-4"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
          </div>
      
          {/* Phone Number Input */}

      
          {/* Password Inputs */}
          <label className="w-full">
            Your password
            <input 
              type="password" 
              className="w-full h-[16px] bg-transparent border-black rounded-[12px] border outline-none p-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
      
          <label className="w-full">
            Confirm password
            <input 
              type="password" 
              className="w-full h-[16px] bg-transparent border-black rounded-[12px] border outline-none p-4"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
      
          {/* Continue As Dropdown */}
          <label className="w-full">
            Continue as
            <select 
              className="w-full h-[56px] bg-transparent border-black rounded-[12px] border outline-none p-4"
              value={continueAs}
              onChange={(e) => setContinueAs(e.target.value)}
              required
            >
              <option value="" disabled>Select an option</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </label>
      
          {/* Verification Component */}
          <div className="mt-4">
            <Verify
              width={320}
              height={160}
              visible={true}
              onSuccess={() => setcaptcha(true)}
              onFail={() => setcaptcha(false)}
              onRefresh={() => console.log('refreshed')}
            />
          </div>
      
          {/* Submit Button */}
          <GoogleOAuthProvider clientId="594536791781-6640scot0ufth8ol2onnnrg3tqo088ih.apps.googleusercontent.com">
          <GoogleLogin
  onSuccess={credentialResponse => {
    setsign(false)
    console.log(credentialResponse);
    const token = credentialResponse.credential;
    console.log(token);
    fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + token)
    .then(response => response.json())
    .then(data => {
      console.log('User Info:', data);
      const { email } = data;
      console.log('Email:', email);
      const {picture}=data
      const {family_name, given_name}=data
      localStorage.setItem('signup','False')
      localStorage.setItem('user-data',JSON.stringify({
            'email':email,
            'firstName':firstName,
            'lastName':lastName,
            'accounttype':continueAs
           }))
      console.log('Picture:', picture);
      fetch('https://abiv.rnpsoft.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, avatar:picture,signinwithgoogle:true,firsName:family_name,lastName:given_name})
      }).then(response => response.json())
      .then(data => {localStorage.setItem('auth-token',data.token);
        console.log('Success:', data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
    })
    .catch(error => {
      console.error('Error fetching user info:', error);
    });
        
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/></GoogleOAuthProvider>
          <button 
            type="submit" 
            className="w-[328px] h-[34px] py-3 rounded-[40px] bg-[#18141b] text-white mt-6">
            Confirm Credentials
          </button>
        </form>
      </div>
    );
};

export default SignUp;
