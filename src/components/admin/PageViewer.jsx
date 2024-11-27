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
  faFolder,
  faFolderOpen,
  faChevronDown,
  faChevronRight as faChevronRightSmall,
} from '@fortawesome/free-solid-svg-icons';
import PageCreator from '@/components/PageCreator';

export default function PageViewer({ pages = [] }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState(new Set([''])); // Initialize with root folder expanded

  useEffect(() => {
    if (selectedFile) {
      fetchFileContent(selectedFile);
    } else {
      setFileContent('');
    }
  }, [selectedFile]);

  const fetchFileContent = async (filePath) => {
    if (!filePath) return;
    try {
      const response = await fetch('/api/admin/file-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filePath }),
      });
      const data = await response.json();
      setFileContent(data.content || '');
    } catch (error) {
      console.error('Error fetching file content:', error);
      setFileContent('');
    }
  };

  console.log('PageViewer received pages:', pages);

  // Organize pages into a folder structure
  const organizePages = (pages) => {
    const structure = {
      files: [], // Add files array at root level
      folders: {}
    };
    
    pages.forEach(page => {
      const parts = page.path.split('/').filter(Boolean);
      console.log('Processing file:', page.path, 'Parts:', parts);
      
      if (parts.length === 1) {
        // Root level file
        structure.files.push({
          name: parts[0],
          path: page.path,
          lastModified: page.lastModified,
          size: page.size
        });
        structure.files.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        // File in subfolder
        let current = structure;
        
        parts.forEach((part, index) => {
          if (index === parts.length - 1) {
            // It's a file
            if (!current.files) current.files = [];
            current.files.push({
              name: part,
              path: page.path,
              lastModified: page.lastModified,
              size: page.size
            });
            current.files.sort((a, b) => a.name.localeCompare(b.name));
          } else {
            // It's a directory
            if (!current.folders) current.folders = {};
            if (!current.folders[part]) {
              current.folders[part] = { files: [], folders: {} };
            }
            current = current.folders[part];
          }
        });
      }
    });
    
    console.log('Organized structure:', structure);
    return structure;
  };

  const folderStructure = organizePages(pages);

  const toggleFolder = (folderPath) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(folderPath)) {
        next.delete(folderPath);
      } else {
        next.add(folderPath);
      }
      return next;
    });
  };

  const renderFolder = (folder, path = '', level = 0) => {
    if (!folder) return null;
    
    const folderPath = path;
    const isExpanded = expandedFolders.has(folderPath);
    const matchesSearch = searchQuery.toLowerCase();

    const hasMatchingFiles = folder.files && folder.files.some(file => 
      file.name.toLowerCase().includes(matchesSearch)
    );

    const hasMatchingFolders = folder.folders && Object.keys(folder.folders).some(folderName => 
      folderName.toLowerCase().includes(matchesSearch) ||
      hasMatchingContent(folder.folders[folderName])
    );

    const shouldShowFolder = !searchQuery || hasMatchingFiles || hasMatchingFolders;

    if (!shouldShowFolder) return null;

    return (
      <div key={folderPath} style={{ marginLeft: `${level * 16}px` }}>
        {path && (
          <div
            className={`
              group flex items-center p-2 rounded-lg cursor-pointer
              ${isExpanded ? 'bg-gray-100' : 'hover:bg-gray-50'}
            `}
            onClick={() => toggleFolder(folderPath)}
          >
            <FontAwesomeIcon
              icon={isExpanded ? faChevronDown : faChevronRightSmall}
              className="h-3 w-3 text-gray-400 mr-2"
            />
            <FontAwesomeIcon
              icon={isExpanded ? faFolderOpen : faFolder}
              className="h-4 w-4 text-gray-400 mr-2"
            />
            <span className="text-sm font-medium text-gray-700">
              {path.split('/').pop()}
            </span>
            {folder.files && (
              <span className="ml-2 text-xs text-gray-500">
                ({folder.files.length} files)
              </span>
            )}
          </div>
        )}
        
        {(isExpanded || !path) && (
          <div className="mt-1 space-y-1">
            {folder.files && folder.files.map((file) => (
              <div
                key={file.path}
                style={{ marginLeft: path ? `${(level + 1) * 16}px` : 0 }}
                className={`
                  group relative rounded-lg transition-all duration-200
                  ${selectedFile === file.path
                    ? 'bg-indigo-50'
                    : 'hover:bg-gray-50'
                  }
                `}
              >
                <button
                  onClick={() => setSelectedFile(file.path)}
                  aria-label={`Select file ${file.name}`}
                  className="w-full text-left p-2 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faFile}
                      className={`h-4 w-4 mr-2 ${
                        selectedFile === file.path
                          ? 'text-indigo-500'
                          : 'text-gray-400 group-hover:text-indigo-400'
                      }`}
                    />
                    <span className={`text-sm ${
                      selectedFile === file.path
                        ? 'text-indigo-600 font-medium'
                        : 'text-gray-700'
                    }`}>
                      {file.name}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center space-x-2">
                    <span>{formatBytes(file.size)}</span>
                  </div>
                </button>
              </div>
            ))}
            {folder.folders && Object.entries(folder.folders).map(([name, subFolder]) =>
              renderFolder(subFolder, `${folderPath}/${name}`, level + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  };

  const hasMatchingContent = (folder) => {
    const hasMatchingFiles = folder.files && folder.files.some(file => 
      file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const hasMatchingFolders = folder.folders && Object.keys(folder.folders).some(folderName => 
      folderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hasMatchingContent(folder.folders[folderName])
    );

    return hasMatchingFiles || hasMatchingFolders;
  };

  const getPageUrl = (filePath) => {
    if (!filePath) return '';
    
    // Get the relative path from src/Pages
    let path = filePath;
    
    // Remove file extension
    path = path.replace(/\.(jsx|js)$/, '');
    
    // Handle dynamic routes
    path = path.replace(/\[([^\]]+)\]/g, (_, param) => `:${param}`);
    
    // Ensure path starts with /pages/
    return `/pages${path.startsWith('/') ? path : `/${path}`}`;
  };

  const refreshPages = () => {
    // TO DO: implement refresh logic
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex h-[calc(100vh-12rem)]">
      {/* Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        aria-label={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
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
                {pages.length} files
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search files"
                className="w-full px-4 py-2 pr-10 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {renderFolder(folderStructure)}
          </div>
        </div>
      </div>

      {/* File Content Panel */}
      <div className={`flex-1 flex flex-col ${isSidebarCollapsed ? 'ml-6' : ''}`}>
        <div className="h-full flex flex-col">
          <PageCreator onCreate={refreshPages} />
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
                      navigator.clipboard.writeText(fileContent || '');
                    }}
                    aria-label="Copy file content"
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Copy content"
                  >
                    <FontAwesomeIcon icon={faCopy} className="h-4 w-4" />
                  </button>
                  {selectedFile && (
                    <Link
                      href={getPageUrl(selectedFile)}
                      target="_blank"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
                    >
                      <FontAwesomeIcon icon={faExternalLink} className="mr-2 h-4 w-4" />
                      Visit Page
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex-1 relative overflow-hidden">
                <div className="absolute inset-0 overflow-auto">
                  <pre className="min-h-full p-4 text-sm font-mono bg-gray-900 text-gray-100">
                    <div className="sticky top-0 right-0 float-right p-2">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-400 rounded">
                        {(fileContent || '').split('\n').length} lines
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
