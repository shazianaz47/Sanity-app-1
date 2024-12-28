// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} My Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;