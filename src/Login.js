// src/App.js
import React from 'react';
import './Login.css';
import Header from './Header';
import MainContent from './MainContent';
import AuthPopup from './AuthPopup';
import { AuthProvider, AuthContext } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <MainContent />
        <AuthContext.Consumer>
          {({ showPopup }) => showPopup && <AuthPopup />}
        </AuthContext.Consumer>
      </div>
    </AuthProvider>
  );
}

export default App;
