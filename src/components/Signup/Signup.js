import react, {useState} from 'react';

export const Signup = () => {

    const [value, setValue] = useState({
        name: '',
        city: '',
        email: '',
    })
  <div>
    <h1>Welcome to signup form</h1>
    <form>
      <lable>Enter first name</lable>
      <input type='text' name='name' />
    </form>
  </div>;
};
