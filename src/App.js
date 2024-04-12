// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import Header from './header.js';
import Menu from './menu.js';
import Imagem from './imagemfundo.js';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <div className="header">
      <Imagem/>
      </div>
      <div className='imagemm'>
      <Header />
      </div>
    </div>

  );
};


export default App;