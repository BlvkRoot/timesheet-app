
import React from 'react';
import '../styles/Login.css';

function LoginComponent() {
    const handleLoginFormSubmit = (e) => {
        e.preventDefault();

        console.log('Yaraa Yara Yara/............');
    }
  return (
    <>
        <div className='login__container'>
            <form onSubmit={handleLoginFormSubmit}>
                <h1>LimitedTimeTime</h1>
                <div className='input__field'>
                    <input type='text' className='username'/>
                </div>
                <div className='input__field'>
                    <input type='password' className='password'/>
                </div>
                <div className='input__field'>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default LoginComponent