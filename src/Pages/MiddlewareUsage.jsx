"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { 
  faShieldHalved, 
  faLock, 
  faUserShield,
  faCode,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

// Prevent FontAwesome from dynamically adding its CSS
config.autoAddCss = false;

export default function MiddlewareUsage() {
  const [activeTab, setActiveTab] = useState('overview');

  const middlewareExamples = [
    {
      title: 'Authentication Middleware',
      icon: faLock,
      description: 'Protect routes and verify user authentication status',
      code: `export function authMiddleware(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
}`,
      usage: 'Place this middleware on protected routes to ensure user authentication'
    },
    {
      title: 'Rate Limiting',
      icon: faShieldHalved,
      description: 'Control request frequency to prevent abuse',
      code: `export function rateLimitMiddleware(req, res, next) {
  const requestCount = getRequestCount(req.ip);
  if (requestCount > RATE_LIMIT) {
    return res.status(429).json({ error: 'Too many requests' });
  }
  next();
}`,
      usage: 'Apply to API routes to prevent excessive requests'
    },
    {
      title: 'Role-Based Access',
      icon: faUserShield,
      description: 'Control access based on user roles',
      code: `export function roleMiddleware(roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    next();
  };
}`,
      usage: 'Use on routes that require specific user roles'
    }
  ];

  const features = [
    {
      title: 'Request Processing',
      description: 'Modify or validate incoming requests before they reach your routes',
      icon: faCode
    },
    {
      title: 'Response Handling',
      description: 'Transform or enhance responses before they are sent to clients',
      icon: faArrowRight
    },
    {
      title: 'Error Management',
      description: 'Centralized error handling and logging functionality',
      icon: faCheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Middleware Usage Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn how to implement and use middleware effectively in your application
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-white dark:bg-gray-800">
            {['overview', 'examples', 'implementation'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-500 mb-4">
                    <FontAwesomeIcon icon={feature.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-8">
              {middlewareExamples.map((example, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-blue-500 mr-4">
                      <FontAwesomeIcon icon={example.icon} className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {example.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {example.description}
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6 mb-6">
                    <pre className="text-green-400 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Usage:</strong> {example.usage}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'implementation' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Implementation Steps
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    1. Create Middleware Function
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Define your middleware function with (req, res, next) parameters
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    2. Apply Middleware
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Use the middleware in your route definitions or globally
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    3. Handle Errors
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Implement error handling and pass errors to error middleware
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
