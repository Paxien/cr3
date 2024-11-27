"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faDatabase,
  faGear,
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import PageViewer from '@/components/admin/PageViewer';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [pages, setPages] = useState([]);

  const stats = [
    { label: 'Total Users', value: '1,234', icon: faUsers, trend: '+12%' },
    { label: 'System Health', value: '98%', icon: faGear, trend: '+2%' },
    { label: 'Database Size', value: '2.4 GB', icon: faDatabase, trend: '+5%' },
    { label: 'Security Score', value: '95/100', icon: faGear, trend: '+3%' },
  ];

  const recentActivities = [
    { id: 1, action: 'User Login', status: 'success', time: '2 minutes ago' },
    { id: 2, action: 'Database Backup', status: 'success', time: '1 hour ago' },
    { id: 3, action: 'System Update', status: 'failed', time: '3 hours ago' },
    { id: 4, action: 'New User Registration', status: 'success', time: '5 hours ago' },
  ];

  const fetchPages = async () => {
    try {
      const response = await fetch('/api/admin/pages');
      const data = await response.json();
      setPages(data.pages);
    } catch (error) {
      console.error('Error fetching pages:', error);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to the admin control panel</p>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`${
              activeTab === 'dashboard'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('pages')}
            className={`${
              activeTab === 'pages'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Page Viewer
          </button>
        </nav>
      </div>

      {activeTab === 'dashboard' ? (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={stat.icon} className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-green-500 text-sm font-medium">{stat.trend}</span>
                  <span className="text-gray-600 text-sm ml-2">vs last month</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <FontAwesomeIcon 
                      icon={activity.status === 'success' ? faCircleCheck : faCircleXmark} 
                      className={`h-5 w-5 ${activity.status === 'success' ? 'text-green-500' : 'text-red-500'} mr-3`}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                Manage Users
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                <FontAwesomeIcon icon={faDatabase} className="mr-2" />
                Backup Database
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                <FontAwesomeIcon icon={faGear} className="mr-2" />
                System Settings
              </button>
            </div>
          </div>
        </>
      ) : (
        <PageViewer pages={pages} />
      )}
    </div>
  );
}
