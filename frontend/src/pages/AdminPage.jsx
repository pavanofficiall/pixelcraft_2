import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [htmlFile, setHtmlFile] = useState(null);
  const [cssFile, setCssFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('html', htmlFile);
    formData.append('css', cssFile);

    try {
      await axios.post('http://localhost:5000/api/templates', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Template uploaded successfully!');
    } catch (error) {
      console.error('Error uploading template:', error);
      alert('Failed to upload template');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <h1 className="text-4xl font-bold text-stone-700 mb-6">Admin - Upload Template</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-stone-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-stone-700 mb-2">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-stone-700 mb-2">HTML File</label>
          <input
            type="file"
            accept=".html"
            onChange={(e) => setHtmlFile(e.target.files[0])}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-stone-700 mb-2">CSS File</label>
          <input
            type="file"
            accept=".css"
            onChange={(e) => setCssFile(e.target.files[0])}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          onClick={handleUpload}
          className="w-full px-4 py-2 bg-stone-600 text-white rounded-lg hover:bg-stone-700"
        >
          Upload Template
        </button>
      </div>
    </div>
  );
};

export default AdminPage;