import React from 'react';
import Link from 'next/link';

const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'SHOP All' },
    { href: '/', label: 'RINGS' },
    { href: '/', label: 'Bags' },
    { href: '/', label: 'NECKLACE' },
    { href: '/', label: 'EARCUFF' },
    { href: '/', label: 'ANKLETS' },
    { href: '/', label: 'CHUNDAN BALI' },
    { href: '/', label: 'BRACELETS & BANGLES' },
    { href: '/', label: 'NEW' },
    { href: '/', label: 'SALE' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10 mx-auto lg:w-[1500px] p-5">
      {/* Logo Section */}
      <div className="font-bold text-xl">H.W COLLECTIONS BLOGS</div>
      {/* Navigation Links */}
      <nav className="flex flex-wrap gap-4">
        <ul className="flex flex-wrap gap-5 text-sm font-medium text-black">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-gray-700">
              <Link href={link.href}>
                <Link href="navLinks">{link.label}</Link>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
