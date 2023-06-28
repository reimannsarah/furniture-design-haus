import './App.css';
import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import ItemControl from './ItemControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <div className='main'>
        <ItemControl />
      </div>
    </React.Fragment>
  );
}

export default App;
