// MainContent.js

import React from 'react';

const MainContent = ({ selectedMenuItem }) => {
  let content = null;
  switch (selectedMenuItem) {
    case 'dashboard':
      content = <h2>Dashboard Page</h2>;
      break;
    case 'users':
      content = <h2>Users Page</h2>;
      break;
    case 'products':
      content = <h2>Products Page</h2>;
      break;
    default:
      content = <div>Select a menu item</div>;
  }

  return <div id="content" className="container-fluid">{content}</div>;
};

export default MainContent;
