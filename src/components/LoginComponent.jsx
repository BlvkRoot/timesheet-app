import React, { useState } from 'react';
import { useMutation } from 'react-query';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../utils/userApiCalls';
import { useStateValue } from '../contexts/StateProvider';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [{ user_token, is_authenticated }, dispatch] = useStateValue();

  const {
    data: userData,
    isLoading,
    isSuccess,
    isError,
    mutate,
  } = useMutation(authenticate, {
    onSuccess: async ({ data: { userId, message, success, token } }) => {
      // Validate if success is true
      if (success) {
        dispatch({
          type: 'SET_USER',
          token,
        });

        dispatch({
          type: 'SET_USERID',
          userId,
        });

        dispatch({
          type: 'SET_ISAUTHENTICATED',
          authenticated: true,
        });
        navigate('/');
      }
    },
  });

  return (
    <div className='login__container'>
      {isLoading ? (
        <div
          style={{
            color: 'green',
            fontSize: '24px',
            padding: '4px',
            margin: '20px 0 4px 0px',
            backgroundColor: '#eee',
            borderRadius: '4px',
          }}
        >
          {`Loading, please hang in there....`}
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default LoginComponent;
