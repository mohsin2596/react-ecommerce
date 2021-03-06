import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homescreen.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component= {HomePage}/>
        <Route exact path='/shop' component= {ShopPage}/>
        <Route exact path='/signin' component= {SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
