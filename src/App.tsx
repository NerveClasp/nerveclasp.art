import React from 'react';
import './App.css';
import svg from './icons/hammer.svg';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="nc">
      <header className="nc-header">
        <p>
          Site is under heavy construction at the moment. Please come back later :)
        </p>
        <p><img id="under-construction" src={svg} alt="Under Construction"/></p>
      </header>
    </div>
  );
}

export default App;
