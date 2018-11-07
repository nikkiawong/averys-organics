import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Calendar from './Calendar';
import Month from './Month';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Nav/>
      <Header/>
      <Switch>
        <Route exact path='/' component={Calendar} />
        <Route exact path='/month' component={Month} />
      </Switch>
    </div>
  );
}

export default App;
