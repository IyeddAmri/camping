// AdminDashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './AdminDashboard.css'; // Import custom CSS file for styling
import ProductsPage from './ProductsPage';
import CampsitesPage from './CampsitePage'; // Import the CampsitesPage component
import Users from './users';
const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const changeView = (view) => {
    setActiveComponent(view);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return (
          <main className="content">
            <h2>Welcome to the Admin Dashboard!</h2>
            <p>This is an admin dashboard page.</p>
          </main>
        );
      case 'products':
        return <ProductsPage />;
      case 'campsites': // Render the CampsitesPage component when activeComponent is 'campsites'
        return <CampsitesPage />;
      // Add cases for other components as needed
      case 'users': // Render the CampsitesPage component when activeComponent is 'campsites'
      return <Users />
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="logo" onClick={toggleSidebar}>
          <img src="ic_round_hamburger_menu-512.webp" alt="Menu" />
        </div>
        <div className="header-title">
          <h1>Admin Dashboard</h1>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} changeView={changeView} />
      {renderComponent()}
    </div>
  );
};

export default AdminDashboard;