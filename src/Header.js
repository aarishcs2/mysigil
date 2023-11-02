// src/Header.js
import React, { useContext } from 'react';
import { Button } from 'antd';
import { AuthContext } from './context/AuthContext';

function Header() {
  const { handleButtonClick } = useContext(AuthContext);

  return (
    <header>
      <div className="logo">Scribe.</div>
      <div className="buttons">
        <Button type="link" onClick={() => handleButtonClick('login')}>Login</Button>
        <Button type="primary" onClick={() => handleButtonClick('register')}>Sign up</Button>
      </div>
    </header>
  );
}

export default Header;
