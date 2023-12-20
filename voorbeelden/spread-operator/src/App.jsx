import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Profile niveau={3}>
          <Avatar title='Hallo wereld' subject='Oefening props' />
        </Profile>
      </header>
    </div>
  );
}

function Profile({ niveau, children }) {
  return <div className='card'>{children}</div>;
}

function Avatar({ subject, title }) {
  //console.log(subject);
  return (
    <>
      <h1>{title}</h1>
      <h2>{subject}</h2>
    </>
  );
}

export default App;
