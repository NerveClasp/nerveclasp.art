import React from 'react';
import './App.css';
import Hammer from './icons/hammer.svg';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="nc">
      <header className="nc-header">
        <p>Site is under heavy construction at the moment.</p>
        <p>Please come back later :)</p>
        <p>
          <Hammer id="under-construction" />
        </p>
      </header>
    </div>
  );
}

export default App;
