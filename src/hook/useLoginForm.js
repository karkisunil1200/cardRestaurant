import {useState} from 'react';

export const useLoginForm = initialState => {
  const [value, setValue] = useState(initialState);

  const changeHandle = e => {
    setValue({...value, [e.target.event]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return [value, setValue];
};
