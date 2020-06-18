import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';
import topImage from './assets/images/topwave.png'
import bottomImage from './assets/images/bottomwaves.png'
import googlePlayBadge from './assets/images/google-play-badge.png'
import appStoreBadge from './assets/images/app-store-badge.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{
          width: '100%',
          maxHeight: 150,
          position: 'absolute',
          top: 0
        }} src={topImage} alt="top wave"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Triply. Coming soon!
        </p>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src={googlePlayBadge} className="store-badge" alt="google play badge" />
          <img src={appStoreBadge} style={{height: 40}} alt="google play badge" />
        </div>
        <img style={{
          width: '100%',
          maxHeight: 150,
          position: 'absolute',
          bottom: 0
        }} src={bottomImage} alt="top wave"/>
      </header>
    </div>
  );
}

export default App;
