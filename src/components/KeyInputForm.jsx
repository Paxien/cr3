import React, { useState } from 'react';

function KeyInputForm() {
  const [key, setKey] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/update-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key }),
      });
      if (response.ok) {
        alert('Key updated successfully!');
      } else {
        alert('Failed to update key.');
      }
    } catch (error) {
      console.error('Error updating key:', error);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete the key?');
    if (!confirmed) return;

    try {
      const response = await fetch('/api/delete-key', {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Key deleted successfully!');
        setKey('');
      } else {
        alert('Failed to delete key.');
      }
    } catch (error) {
      console.error('Error deleting key:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Management</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter your sensitive key:
          </label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete Key
        </button>
      </form>
    </div>
  );
}

export default KeyInputForm;
