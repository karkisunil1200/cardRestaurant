import React from 'react';

const Restaurant = props => {
  return (
    <div>
      <img src={props.item.avatar} />
      <h5>Name: {props.item.first_name}</h5>
    </div>
  );
};

export default Restaurant;
