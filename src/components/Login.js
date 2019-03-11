import React, {useState} from 'react';
import {NotificationManager} from 'react-notifications';
import { CometChat } from '@cometchat-pro/chat';
import config from '../config';

const Login = (props) => {

  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const doSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    CometChat.login(value, config.apiKey).then(
      User => {
        NotificationManager.success('You are now logged in', 'Login Success');
        console.log("Login Successful:", { User });
        props.setUser(User)
        // User login success, setUser value and React will render the chatbox.
      },
      error => {
        NotificationManager.error('Please try again', 'Login Failed');
        console.log("Login failed with exception:", { error });
        setIsSubmitting(false);
        // User login failed, check error and take appropriate action.
      }
    );

  }

  return (
      <div className='row'>
        <div className='col-md-6 login-form mx-auto'>
          <h3>Login to Awesome Chat</h3>
          <form className='mt-5' onSubmit={doSubmit}>
            <div className='form-group'>
              <input
                type='text'
                name='username'
                className='form-control'
                placeholder='Your Username'
                value={value}
                onChange={event => setValue(event.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='submit'
                className='btn btn-primary btn-block'
                value={`${isSubmitting? 'Loading...': 'Login'}`}
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;
