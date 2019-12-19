import React from 'react';

import './App.css';
import LoginForm from './components/Login/LoginForm';
import {Signup} from './components/Signup/Signup';
import RestaurantList from './components/Restaurants/RestaurantList';

function App() {
  return (
    <div className='App'>
      <RestaurantList />
    </div>
  );
}

export default App;
