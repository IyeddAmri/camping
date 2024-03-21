// AdminDashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './AdminDashboard.css'; // Import custom CSS file for styling
import ProductsPage from './ProductsPage';
import CampsitesPage from './CampsitePage'; // Import the CampsitesPage component

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
            <div className="description-boxes">
              <div className="description-box" onClick={() => changeView('products')}>
                <h3>Manage Products</h3>
                <p>View, add, edit, or delete products in your inventory.</p>
              </div>
              <div className="description-box" onClick={() => changeView('campsites')}>
                <h3>Manage Campsites</h3>
                <p>Manage information and bookings for different campsites.</p>
              </div>
              <div className="description-box" onClick={() => changeView('settings')}>
                <h3>Customize Settings</h3>
                <p>Adjust settings related to user permissions, appearance, and more.</p>
              </div>
              {/* Add more description boxes for other features */}
            </div>
          </main>
        );
      case 'products':
        return <ProductsPage />;
      case 'campsites': // Render the CampsitesPage component when activeComponent is 'campsites'
        return <CampsitesPage />;
      // Add cases for other components as needed
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="logo" onClick={toggleSidebar}>
          <img src="admin\frontend\my-app\assets\logo.png" alt="Menu" />
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
