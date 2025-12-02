import React, { useState, useEffect } from 'react';
import InputGroup from '../InputGroup'; // Reusing your InputGroup if possible, or creating standard inputs

const EventFormModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    starts_at: '',
    location: '',
    capacity: '',
    price: '',
    image: '' // Optional, might need file upload logic later
  });

  useEffect(() => {
    if (initialData) {
        // Format date for datetime-local input (YYYY-MM-DDTHH:mm)
        const date = new Date(initialData.starts_at);
        const formattedDate = date.toISOString().slice(0, 16);
        
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        starts_at: formattedDate || '',
        location: initialData.location || '',
        capacity: initialData.capacity || '',
        price: initialData.price || '',
        image: initialData.image || '',
        status: initialData.status || 'Active'
      });
    } else {
      setFormData({
        title: '',
        description: '',
        starts_at: '',
        location: '',
        capacity: '',
        price: '',
        image: '',
        status: 'Active'
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1E293B] rounded-lg shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">
            {initialData ? 'Edit Event' : 'Create New Event'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-[#2D3748] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full bg-[#2D3748] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Date & Time</label>
              <input
                type="datetime-local"
                name="starts_at"
                value={formData.starts_at}
                onChange={handleChange}
                className="w-full bg-[#2D3748] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-[#2D3748] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Capacity</label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="w-full bg-[#2D3748] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full bg-[#2D3748] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full bg-[#2D3748] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                  <option value="Sold Out">Sold Out</option>
                  <option value="Past">Past</option>
              </select>
            </div>
          </div>
            
            {/* Image URL for now, file upload is more complex */}
           <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full bg-[#2D3748] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold"
            >
              {initialData ? 'Update Event' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventFormModal;
