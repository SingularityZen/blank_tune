import React from 'react';
import { Link } from 'react-router-dom'; // You might need to install react-router-dom

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/newpage">New Page</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;
