import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Restaurant from './Restaurant';

const RestaurantList = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then(res => {
        console.log(res.data.data);
        setRestaurant(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h3> Welcome to the Restaurant</h3>

      {restaurant.map(item => {
        return <Restaurant item={item} key={item.id} />;
      })}
    </div>
  );
};

export default RestaurantList;
