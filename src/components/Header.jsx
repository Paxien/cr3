"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faCloud, faCode, faLock } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/', icon: faHome },
    { name: 'Analytics', path: '/analytics', icon: faChartBar },
    { name: 'Storage', path: '/storage', icon: faCloud },
    { name: 'API', path: '/api', icon: faCode },
    { name: 'Admin', path: '/admin', icon: faLock },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
