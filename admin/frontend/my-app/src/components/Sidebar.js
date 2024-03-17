import React from 'react';
import './Sidebar.css'; // Import custom CSS file for styling

const Sidebar = ({ isOpen, changeView }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li onClick={() => changeView('dashboard')}>Dashboard</li>
        <li onClick={() => changeView('users')}>Users</li>
        <li onClick={() => changeView('products')}>Products</li>
        <li onClick={() => changeView('campsites')}>campsites</li>
        <li onClick={() => changeView('resources')}>resources</li>
        <li onClick={() => changeView('')}></li>
        {/* Add more menu items as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
