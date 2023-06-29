import './App.css';
import React from 'react';
import Header from './Header';
import ItemControl from './ItemControl';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <NavBar /> */}
      <div className='main'>
        <ItemControl />
      </div>
        <Footer />
    </React.Fragment>
  );
}

export default App;
