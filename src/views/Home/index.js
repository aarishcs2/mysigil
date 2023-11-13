import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import * as jwt_decode from 'jwt-decode';


export default function Home() {
  const [loading, setLoading] = useState(false); // New state variable for loading

  
  // code for authenticating with google 
  function handleCallbackResponse(response) {
    console.log('handle callback response', response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);

    // Check if the user with this email exists
    const userdetails = { email: userObject.email };
    fetch(`http://localhost:5000/checkUserExists`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(userdetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.exists) {
          // User exists, log them in
          loginUser(userObject.email);
        } else {
          // User doesn't exist, create an account and then log them in
          createAccount(userObject);
        }
      })
      .catch((error) => {
        console.error('Error checking user existence:', error);
      });
  }

  function loginUser(email) {
    // Log in the user
    const userdetails = { email };
    fetch(`http://localhost:5000/googlelogin`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(userdetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Set the cookie on successful login
          cookies.set('jwt', data.token, { path: '/' });
          cookies.set('designation', data.designation, { path: '/' });
          navigate('/homepage', {
            state: { username: data.username, email: data.email },
          });
        } else {
          setErrormessage('Login failed');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  }

  function createAccount(userObject) {
    // Create an account with the userObject data
    const newUserDetails = {
      email: userObject.email,
      username: userObject.given_name + userObject.family_name,
      image: userObject.picture, 
      country: userObject.locale
    };

    fetch(`http://localhost:5000/creategoogleAccount`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newUserDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Log in the user after account creation
          loginUser(userObject.email);
        } else {
          setErrormessage('Account creation failed');
        }
      })
      .catch((error) => {
        console.error('Error creating account:', error);
      });
  }

  // code for authenticating with google ends here

  useEffect(() => {
    // Initialize Google API
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "74824705676-0vclq96v3h43enn50ifojvfv627rhri9.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
  
      window.google.accounts.id.renderButton(
        document.getElementById("googlediv"),
        { theme: "outline", size: "large" }
      );
  
      window.google.accounts.id.prompt();
    }
  }, []);

  // for login 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state variable
  const [registrationSuccess, setRegistrationSuccess] = useState(false);


  const [errorMessage, setErrormessage] = useState('');
  const navigate = useNavigate();
  const cookies = new Cookies(); // Create an instance of the Cookies class

  useEffect(() => {
    // Retrieve the JWT token from cookies
    const jwtToken = cookies.get('jwt');

    if (jwtToken) {
      const decoded = jwt_decode(jwtToken);

      // Verify the expiration date
      if (decoded.exp * 1000 > Date.now()) {
        // Automatically log in the user
        navigate('/dashboard', {
          state: { username: decoded.username, email: decoded.email },
        });
      } else {
        // JWT has expired; you may want to remove it
        cookies.remove('jwt');
      }
    }
  }, [cookies, navigate]);

  const submitloginform = async (e) => {
    try {
      e.preventDefault();
      const userdetails = { email, password };
      const response = await fetch(`https://mysigilbackend.onrender.com/login`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(userdetails),
      });

      const data = await response.json();
      if (data.success) {
        // Set the cookie on successful login
        cookies.set('jwt', data.token, { path: '/' });
        cookies.set('designation', data.designation, { path: '/' }); // Save the designation in the cookie
        
        navigate('/dashboard', { state: { username: data.username, email: data.email } });
      } else if (data.message === 'Invalid') {
        setErrormessage('Incorrect user credentials');
      } else {
        setErrormessage('User not found');
      }
    } catch (error) {
      console.log('Error on login page', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  return (
    <>
      <div className=''>

          <nav class="navbar" style={{backgroundColor: 'light'}}>
            <div class="container">
                <img alt="" width="50"/>
            </div>
          </nav>

          <div className='row' style={{marginTop:  '-5rem'}}>

            <div className='col-md-6 loginform'>
            <div className="container p-4" style={{
              borderRadius: '1rem', 
              marginTop: '25%', 
              width: '70%',
              backgroundColor: 'white',
            }}>

            {registrationSuccess && (
              <div className="alert alert-success mt-3" role="alert">
                Registration successful. You can now log in with your new account.
              </div>
            )}
            <p className='text-center fw-bold'>Login</p>
            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
            <form className="form-group" onSubmit={submitloginform}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mt-2"
                type="text"
              />

              <div className="input-group mt-3">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  type={showPassword ? 'text' : 'password'} // Toggle the input type
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  >
                    {showPassword ? <i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i> } {/* Show appropriate eye icon */}
                  </button>
                </div>
              </div>
              <button className="btn btn-dark btn-sm mt-3 w-100">Login</button>
            </form>

            <div className='mt-3' id='googlediv'></div>
            <p>
             {loading ? 'Logging in, please wait...' : 'Login'}
            </p>

            {/* <Link className="" to={`/forgotpassword`} style={{ fontSize: "0.9rem", textDecoration: 'none', color: 'black' }}>Forgotten password?</Link>
            <br />
            <Link className="" to={`/createaccount`} style={{ fontSize: "0.9rem", textDecoration: 'none', color: 'black' }}>Dont have an Account? Register here</Link>
          */}
          </div>
            
          </div>
        </div>     
      </div>
    </>
  );
}