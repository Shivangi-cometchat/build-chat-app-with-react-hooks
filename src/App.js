import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import './App.css';
import {NotificationContainer} from 'react-notifications';

import Login from './components/Login';
import Chat from './components/Chat';

const App = () => {
  const [user, setUser] = useState(null);

  const renderApp = () => {
    if (user) {
      return <Chat user={user}/>      
    } else {
      return <Login setUser={setUser}/>
    }
  }

  return (
    <div className='container'>
      <NotificationContainer />
      {renderApp()}
    </div>
  );
}

export default App;
