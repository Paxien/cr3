import React, { useState } from 'react';

function PageCreator({ onCreate }) {
  const [pageName, setPageName] = useState('');
  const [pageType, setPageType] = useState('.jsx');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/create-page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageName, pageType }),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert('Page created successfully!');
        setPageName('');  // Reset form
        if (onCreate) onCreate();
      } else {
        alert(data.error || 'Failed to create page.');
      }
    } catch (error) {
      console.error('Error creating page:', error);
      alert('Failed to create page. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Page Name"
        value={pageName}
        onChange={(e) => setPageName(e.target.value)}
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <select value={pageType} onChange={(e) => setPageType(e.target.value)} className="block w-full mt-1">
        <option value=".jsx">JSX</option>
        <option value=".js">JS</option>
      </select>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Page
      </button>
    </form>
  );
}

export default PageCreator;
