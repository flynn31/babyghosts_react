import React from 'react';
import './App.css';
import HeaderElement from './Layouts/Header';
import MainElement from "./Layouts/Main";
import FooterElement from './Layouts/Footer';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <HeaderElement />
        <MainElement />
        <FooterElement />
      </div>
    </div>
  );
}

export default App;
