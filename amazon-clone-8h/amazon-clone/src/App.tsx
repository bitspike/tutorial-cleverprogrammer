import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * App is the main entry point of this ReactJS application
 * @return {JSX.Element} The jmx of the application
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          May your code be light as a feather!!!
        </a>
      </header>
    </div>
  );
}

export default App;
