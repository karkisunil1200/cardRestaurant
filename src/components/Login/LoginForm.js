import React, {useState} from 'react';

const LoginForm = () => {
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value});
    // console.log([e.target.name], e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState({
      username: '',
      password: ''
    });
  };

  return (
    <div>
      <h1>Welcome to the Login form</h1>
      <div className='loginForm'>
        <form>
          <div className='inputText username'>
            <label>Username</label>
            <input
              type='text'
              placeholder='Enter your username'
              onChange={handleChange}
              value={state.username}
              name='username'
            />
          </div>

          <div className='inputText password'>
            <label>Password</label>
            <input
              type='text'
              placeholder='Enter your password'
              onChange={handleChange}
              value={state.password}
              name='password'
            />
          </div>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
