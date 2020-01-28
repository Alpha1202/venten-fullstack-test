import React from 'react';
import './App.css'; 

import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import NavBar from './components/NavBar';

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
  <>
  <NavBar />
  <Switch>
   <Route exact path="/" component={Home} />
  <Route exact path="/product/:id" component={SingleProduct} />
  </Switch>
  </>
  );
}

export default App;
