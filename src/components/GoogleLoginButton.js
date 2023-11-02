// src/GoogleLoginButton.js
import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import '../style/style.css'

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  return (
    <Button 
      type="primary" 
      icon={<GoogleOutlined />} 
      onClick={handleGoogleLogin}
      style={{ background: '#4285F4', borderColor: '#4285F4' }}  // Style the button with Google's color
      block  // <-- Make the button full-width
      className="google-button"  // <-- Add this line
    >
      Login with Google
    </Button>
  );
};

export default GoogleLoginButton;
