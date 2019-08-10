import React from 'react';
import Header from './Header/Header';
import './Layout.css';

export default ({ children }) => (
  <div className="Layout">
    <Header />
    <div className="Layout-content">{children}</div>
  </div>
);
