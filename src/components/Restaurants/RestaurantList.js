import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
      {restaurant.map(item => {
        return (
          <Link to={`/restaurantList/${item.id}`}>
            <Restaurant item={item} key={item.id} />;
          </Link>
        );
      })}
    </div>
  );
};

export default RestaurantList;
