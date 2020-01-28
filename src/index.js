import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {ProductProvider} from './Context';



const display = document.getElementById('root');


ReactDOM.render(
  <ProductProvider>
  <Router>
  <App />
  </Router>
  </ProductProvider>,
   display);

