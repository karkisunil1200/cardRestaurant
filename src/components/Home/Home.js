import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Restaurant Pages </h1>
      <div>
        <Link to='/restaurantList'>
          <button>View Restaurants</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
