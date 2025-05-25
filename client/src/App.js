import React, { useContext } from 'react';
import { AuthContext } from './context/authContext';
import './App.css';

function App() {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="App">
      <h1>Welcome to the React App</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

export default App;
