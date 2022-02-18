import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import '../styles/Login.css';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, isSuccess, isError, mutate } = useMutation(
    (loginParams) => {
        console.log('Login params', loginParams);
      return axios.post(
        'http://localhost:4141/api/v1/users/login',
        loginParams
      );
    }
  );
  return (
    <>
      <div className='login__container'>
        <form
          onSubmit={(e) => {
              e.preventDefault();
            mutate({
              email: username,
              password,
            });
          }}
        >
          <h1>LimitedTimeTime</h1>
          <div className='input__field'>
            <input
              type='text'
              className='username'
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div className='input__field'>
            <input
              type='password'
              className='password'
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className='input__field'>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginComponent;
