"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faShieldAlt, faFilter, faHourglass } from '@fortawesome/free-solid-svg-icons';

export default function CreateMiddleware() {
  const [activeTab, setActiveTab] = useState('auth');
  
  const middlewareExamples = {
    auth: {
      title: 'Authentication Middleware',
      description: 'Protect routes and verify user authentication',
      code: `// middleware/auth.js
export function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ 
      error: 'No token provided' 
    });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ 
      error: 'Invalid token' 
    });
  }
}`,
    },
    logging: {
      title: 'Logging Middleware',
      description: 'Log requests and responses for monitoring',
      code: `// middleware/logger.js
export function loggerMiddleware(req, res, next) {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(\`\${req.method} \${req.url} \${res.statusCode} \${duration}ms\`);
  });
  
  next();
}`,
    },
    error: {
      title: 'Error Handling Middleware',
      description: 'Catch and process errors consistently',
      code: `// middleware/error.js
export function errorMiddleware(err, req, res, next) {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      ...(process.env.NODE_ENV === 'development' && {
        stack: err.stack
      })
    }
  });
}`,
    },
    validation: {
      title: 'Request Validation Middleware',
      description: 'Validate incoming requests',
      code: `// middleware/validator.js
export function validateMiddleware(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }
    
    next();
  };
}`,
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Middleware</h1>
        <p className="mt-2 text-lg text-gray-600">
          Learn how to create and implement middleware in your application
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {Object.keys(middlewareExamples).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === key
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {middlewareExamples[key].title}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Description */}
        <div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <FontAwesomeIcon
                  icon={
                    activeTab === 'auth' ? faShieldAlt :
                    activeTab === 'logging' ? faFilter :
                    activeTab === 'error' ? faHourglass :
                    faCode
                  }
                  className="h-6 w-6 text-indigo-600"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                {middlewareExamples[activeTab].title}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              {middlewareExamples[activeTab].description}
            </p>
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Request/Response processing</li>
                <li>Error handling</li>
                <li>Async support</li>
                <li>Chainable middleware</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Code */}
        <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
            <span className="text-sm text-gray-400">Example Code</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(middlewareExamples[activeTab].code);
              }}
              className="text-gray-400 hover:text-gray-200"
            >
              Copy Code
            </button>
          </div>
          <pre className="p-4 text-sm">
            <code className="text-gray-300">
              {middlewareExamples[activeTab].code}
            </code>
          </pre>
        </div>
      </div>

      {/* Implementation Guide */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Guide</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="prose max-w-none">
            <h3>How to Use</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <span className="font-medium">Create Middleware File:</span>
                <p className="ml-6 mt-2 text-gray-600">
                  Create a new file in your middleware directory for each middleware function.
                </p>
              </li>
              <li>
                <span className="font-medium">Import Dependencies:</span>
                <p className="ml-6 mt-2 text-gray-600">
                  Import any required packages and utilities needed by your middleware.
                </p>
              </li>
              <li>
                <span className="font-medium">Define Middleware Function:</span>
                <p className="ml-6 mt-2 text-gray-600">
                  Create your middleware function following the (req, res, next) pattern.
                </p>
              </li>
              <li>
                <span className="font-medium">Apply Middleware:</span>
                <p className="ml-6 mt-2 text-gray-600">
                  Use the middleware in your application either globally or on specific routes.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
