import React, { useState } from 'react';
import './Notice.css';

const NoticeAdmin = () => {
  const [notices, setNotices] = useState([]);
  const [message, setMessage] = useState('');

  const handlePost = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    const newNotice = {
      message: trimmed,
      timestamp: new Date().toLocaleString(),
    };

    setNotices([newNotice, ...notices]);
    setMessage('');
  };

  return (
    <div className="admin-notice-container">
      <h1>Post a Notice</h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write something about classes, events, or announcements..."
        rows={4}
        className="notice-textarea"
      />

      <button onClick={handlePost} className="post-button">Post</button>

      <div className="notice-feed">
        <h2>Posted Notices</h2>
        {notices.length === 0 ? (
          <p className="no-notices">No notices yet.</p>
        ) : (
          notices.map((notice, index) => (
            <div key={index} className="notice-card">
              <p>{notice.message}</p>
              <span className="timestamp">{notice.timestamp}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NoticeAdmin;
