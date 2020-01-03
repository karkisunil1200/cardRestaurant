import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import LoginForm from './components/Login/LoginForm';
import {Signup} from './components/Signup/Signup';
import RestaurantList from './components/Restaurants/RestaurantList';
import Restaurant from './components/Restaurants/Restaurant';
import RestaurantDetail from './components/Restaurants/RestaurantDetail';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/restaurantList' component={RestaurantList} />
        <Route path='/restaurantList/:id' component={RestaurantDetail} />
      </Switch>
    </div>
  );
}

export default App;
