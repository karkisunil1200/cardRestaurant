import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RestaurantList = () => {
  const [state, setState] = useState('');

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then(res => {
        console.log(res.data);
      })
      .catch();
  }, []);
  return (
    <div>
      <h2>Welcome to the restaurant list</h2>
    </div>
  );
};

export default RestaurantList;
