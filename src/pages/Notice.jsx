import React, { useState, useEffect } from 'react';
import './Notice.css';

const NoticeAdmin = () => {
  const [notices, setNotices] = useState([]);
  const [message, setMessage] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Load notices from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('notices');
    if (stored) {
      setNotices(JSON.parse(stored));
    }
  }, []);

  // Save notices to localStorage on change
  useEffect(() => {
    localStorage.setItem('notices', JSON.stringify(notices));
  }, [notices]);

  const handlePost = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    if (editIndex !== null) {
      // Editing existing notice
      const updatedNotices = [...notices];
      updatedNotices[editIndex].message = trimmed;
      updatedNotices[editIndex].timestamp = new Date().toLocaleString();
      setNotices(updatedNotices);
      setEditIndex(null);
    } else {
      // Adding new notice
      const newNotice = {
        message: trimmed,
        timestamp: new Date().toLocaleString(),
      };
      setNotices([newNotice, ...notices]);
    }

    setMessage('');
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setMessage('');
  };

  const handleDelete = (index) => {
    const updated = notices.filter((_, i) => i !== index);
    setNotices(updated);
    // Cancel edit mode if the deleted post was being edited
    if (editIndex === index) {
      cancelEdit();
    }
  };

  return (
    <div className="admin-notice-container">
      <h1>{editIndex !== null ? 'Edit Notice' : 'Post a Notice'}</h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write something about classes, events, or announcements..."
        rows={4}
        className="notice-textarea"
      />

      <div className='update-cancel'>
        <button onClick={handlePost} className="post-button">
          {editIndex !== null ? 'Update' : 'Post'}
        </button> {editIndex !== null && (
          <button
            onClick={cancelEdit}
            className="post-button"
            style={{ backgroundColor: '#6c757d', marginLeft: '10px' }} >
            Cancel
          </button>
        )}
      </div>

      <div className="notice-feed">
        <h2>Posted Notices</h2>
        {notices.length === 0 ? (
          <p className="no-notices">No notices yet.</p>
        ) : (
          notices.map((notice, index) => (
            <div key={index} className="notice-card">
              <p>{notice.message}</p>
              <span className="timestamp">{notice.timestamp}</span>
              <div className='edit-delete' style={{ marginTop: '8px' }}>
                <button
                  onClick={() => {
                    setMessage(notice.message);
                    setEditIndex(index);
                  }}
                  className="edit-button"  >  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="delete-button">  Delete  </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NoticeAdmin;
