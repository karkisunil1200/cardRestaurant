import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RestaurantDetail = props => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users${props.match.params.id}`)
      .then(response => {
        console.log(response.data);
        setState(response.data);
      })
      .catch();
  }, [props.match.params.id]);

  return (
    <div>
      <h4>Welcome to the Restaurant detail</h4>
    </div>
  );
};

export default RestaurantDetail;
