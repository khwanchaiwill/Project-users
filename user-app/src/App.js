import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from '../src/component/Loginform'
import RegisterForm from './component/Register'
import DashBoard from './component/dashboard'
import {Switch, NavLink, Route } from 'react-router-dom';
import  PrivateRoute from './component/PrivateRoute'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/dashboard">Main feed</NavLink>
        <NavLink to="/register">Registation</NavLink>
      </header>
<div>

  <Switch>
  <PrivateRoute path='/dashboard' component={DashBoard}/>
<Route exact path="/">
  <LoginForm />
</Route>
  <Route path="/register">
    <RegisterForm />
  </Route>
  
 </Switch>
 
</div>

    </div>
  );
}

export default App;
