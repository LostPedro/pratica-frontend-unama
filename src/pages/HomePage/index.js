import React from 'react'
import LogoComponent from '../../components/LogoComponent'
import logo from '../../assets/logo.svg';
import ptBr from '../../settings/ptBr';
import './style.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoComponent logo={logo} />
        <p>
          {ptBr.inputNameLabel}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         {ptBr.inputEmailLabel}
        </a>
      </header>
    </div>
  );
}

export default HomePage;
