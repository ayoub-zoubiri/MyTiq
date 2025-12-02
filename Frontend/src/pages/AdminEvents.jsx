import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import EventTable from '../components/Admin/EventTable';
import EventFormModal from '../components/Admin/EventFormModal';
import { useEvents } from '../context/EventContext';

const AdminEvents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const { createEvent, updateEvent } = useEvents();

  const handleCreateClick = () => {
    setEditingEvent(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (event) => {
    setEditingEvent(event);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  const handleFormSubmit = async (formData) => {
    let result;
    if (editingEvent) {
      result = await updateEvent(editingEvent.id, formData);
    } else {
      result = await createEvent(formData);
    }

    if (result.success) {
      handleModalClose();
    } else {
      alert(result.message); // Simple error handling for now
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Event Management</h1>
          <p className="text-gray-400 mt-1">Manage and monitor your events</p>
        </div>
        <button 
            onClick={handleCreateClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          <span>Create New Event</span>
        </button>
      </div>
      
      <EventTable onEdit={handleEditClick} />

      <EventFormModal 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleFormSubmit}
        initialData={editingEvent}
      />
    </AdminLayout>
  );
};

export default AdminEvents;
