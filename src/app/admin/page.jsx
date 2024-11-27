"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faGear, 
  faDatabase, 
  faShield,
  faChartLine,
  faCircleCheck,
  faCircleXmark,
  faFile,
  faCode,
  faExternalLink,
  faCopy
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState('');
  const [pages, setPages] = useState([]);

  const stats = [
    { label: 'Total Users', value: '1,234', icon: faUsers, trend: '+12%' },
    { label: 'System Health', value: '98%', icon: faGear, trend: '+2%' },
    { label: 'Database Size', value: '2.4 GB', icon: faDatabase, trend: '+5%' },
    { label: 'Security Score', value: '95/100', icon: faShield, trend: '+3%' },
  ];

  const recentActivities = [
    { id: 1, action: 'User Login', status: 'success', time: '2 minutes ago' },
    { id: 2, action: 'Database Backup', status: 'success', time: '1 hour ago' },
    { id: 3, action: 'System Update', status: 'failed', time: '3 hours ago' },
    { id: 4, action: 'New User Registration', status: 'success', time: '5 hours ago' },
  ];

  // Function to fetch pages
  const fetchPages = async () => {
    try {
      const response = await fetch('/api/admin/pages');
      const data = await response.json();
      setPages(data.pages);
    } catch (error) {
      console.error('Error fetching pages:', error);
    }
  };

  // Function to fetch file content
  const fetchFileContent = async (filePath) => {
    try {
      const response = await fetch('/api/admin/file-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filePath }),
      });
      const data = await response.json();
      setFileContent(data.content);
    } catch (error) {
      console.error('Error fetching file content:', error);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  useEffect(() => {
    if (selectedFile) {
      fetchFileContent(selectedFile);
    }
  }, [selectedFile]);

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
        <div className="bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x">
            {/* File List Panel */}
            <div className="p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Pages</h2>
                <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full">
                  {pages.length} files
                </span>
              </div>
              <div className="space-y-3">
                {pages.map((page, index) => (
                  <div 
                    key={index} 
                    className={`
                      group relative bg-white rounded-lg shadow-sm border transition-all duration-200
                      ${selectedFile === page.path
                        ? 'border-indigo-500 ring-1 ring-indigo-500'
                        : 'border-gray-200 hover:border-indigo-300'
                      }
                    `}
                  >
                    <button
                      onClick={() => setSelectedFile(page.path)}
                      className="w-full text-left p-4"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <FontAwesomeIcon 
                            icon={faFile} 
                            className={`h-5 w-5 ${
                              selectedFile === page.path
                                ? 'text-indigo-500'
                                : 'text-gray-400 group-hover:text-indigo-400'
                            }`}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className={`text-sm font-medium truncate ${
                            selectedFile === page.path ? 'text-indigo-600' : 'text-gray-900'
                          }`}>
                            {page.name}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            Last modified: {new Date().toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* File Content Panel */}
            <div className="col-span-3 p-6">
              <div className="bg-gray-50 rounded-lg">
                {selectedFile ? (
                  <>
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {selectedFile.split('/').pop()}
                        </h3>
                        <span className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          {selectedFile.split('.').pop().toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(fileContent);
                            // You could add a toast notification here
                          }}
                          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Copy content"
                        >
                          <FontAwesomeIcon icon={faCopy} className="h-4 w-4" />
                        </button>
                        <Link
                          href={`/pages/${selectedFile.split('/').pop().replace('.jsx', '')}`}
                          target="_blank"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
                        >
                          <FontAwesomeIcon icon={faExternalLink} className="mr-2 h-4 w-4" />
                          Visit Page
                        </Link>
                      </div>
                    </div>
                    <div className="relative">
                      <pre className="p-4 text-sm font-mono bg-gray-900 text-gray-100 rounded-b-lg overflow-x-auto">
                        <code className="block whitespace-pre">{fileContent}</code>
                      </pre>
                      <div className="absolute top-0 right-0 p-2">
                        <span className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-400 rounded">
                          {fileContent.split('\n').length} lines
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 px-4">
                    <FontAwesomeIcon icon={faFile} className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No file selected</h3>
                    <p className="text-sm text-gray-500 text-center">
                      Select a file from the list to view its contents
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
