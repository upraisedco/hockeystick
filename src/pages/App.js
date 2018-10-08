import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Router from '../router.js';

import '../styles/styles.scss';


const App = () => {
  return(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
