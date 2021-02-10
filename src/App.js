
import React from 'react';
import './App.css';
import Registration from './components/Registration';
import Account from './components/Account';
import { Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div className="wrapper">
      <Switch>
      <Route path="/" component={Registration} exact/> 
      <Route path="/account" component={Account} />
    </Switch>
    </div>
  );
}

export default App;
