'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile,
  faCopy,
  faExternalLink,
  faSearch,
  faCode,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function PageViewer({ pages = [] }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

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
    if (selectedFile) {
      fetchFileContent(selectedFile);
    }
  }, [selectedFile]);

  const filteredPages = pages.filter(page => 
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-md flex h-[calc(100vh-12rem)]">
      {/* Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-r-lg shadow-md hover:bg-gray-50 transition-transform duration-200 transform -translate-x-1/2 group"
      >
        <FontAwesomeIcon 
          icon={isSidebarCollapsed ? faChevronRight : faChevronLeft} 
          className="h-4 w-4 text-gray-500 group-hover:text-gray-700"
        />
      </button>

      {/* File List Panel */}
      <div 
        className={`
          border-r border-gray-200 transition-all duration-300 ease-in-out overflow-hidden
          ${isSidebarCollapsed ? 'w-0' : 'w-80'}
        `}
      >
        <div className="h-full flex flex-col bg-gray-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Pages</h2>
              <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full">
                {filteredPages.length} / {pages.length}
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredPages.map((page, index) => (
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
                  className="w-full text-left p-3"
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
      </div>

      {/* File Content Panel */}
      <div className={`flex-1 flex flex-col ${isSidebarCollapsed ? 'ml-6' : ''}`}>
        <div className="h-full flex flex-col">
          {selectedFile ? (
            <>
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faCode} className="h-5 w-5 text-gray-400" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {selectedFile.split('/').pop()}
                    </h3>
                  </div>
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
              <div className="flex-1 relative overflow-hidden">
                <div className="absolute inset-0 overflow-auto">
                  <pre className="min-h-full p-4 text-sm font-mono bg-gray-900 text-gray-100">
                    <div className="sticky top-0 right-0 float-right p-2">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-400 rounded">
                        {fileContent.split('\n').length} lines
                      </span>
                    </div>
                    <code className="block whitespace-pre">{fileContent}</code>
                  </pre>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-4">
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
  );
}
