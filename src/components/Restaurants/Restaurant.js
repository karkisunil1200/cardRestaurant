import React from 'react';

const Restaurant = props => {
  const {first_name, last_name, avatar} = props.item;
  return (
    <div>
      <img src={avatar} />

      <h5>First Name: {first_name}</h5>
      <h5> Last Name: {last_name}</h5>
    </div>
  );
};

export default Restaurant;
