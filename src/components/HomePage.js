import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';

const HomePage = () => {
  return (
    <div>
      <h1>React Slingshot</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
      <Input />
    </div>
  );
};

export default HomePage;
