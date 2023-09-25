/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '../views/Button.js';

const Header = ({ category, title, buttonText, onButtonClick }) => (
  <div className="mb-10">
    <p className="text-lg text-gray-400" style={{ fontSize: "1.125rem", color: "#718096" }}>
      {category}
    </p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900" style={{ fontSize: "1.875rem", fontWeight: "800", letterSpacing: "-0.025em", color: "#1e3a8a" }}>
      {title}
    </p>
    <p>
    </p>
  </div>
);

export default Header;
