import React from 'react';
import PropTypes from 'prop-types';

function NavBar(props) {
  return (
    <div className='navbar'>
      <button className="nav-btn" onClick={props.onHomeClick}>Home</button>
      <p>Contact</p>
      <p>About</p>
      <button className="nav-btn" onClick={props.onCartClick}>Cart</button>
    </div>
  )
}

NavBar.propTypes = {
  onHomeClick: PropTypes.func,
  onCartClick: PropTypes.func
}

export default NavBar;