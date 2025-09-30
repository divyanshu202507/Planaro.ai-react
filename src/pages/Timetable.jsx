import React, { useState } from "react";
import "./Timetable.css";

const Timetable = () => {
  const [page, setPage] = useState("home"); // "home" or "view"

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <h1>📅 Class Timetable Management</h1>
      </header>

      {page === "home" && (
        <div className="home-options">
          {/* This Week Timetable */}
          <div
            className="option-card"
            onClick={() => setPage("view")}
          >
            <h2>This Week Timetable</h2>
          </div>

          {/* Create Timetable For Next Week */}
          <div
            className="option-card"
            onClick={() => alert("Create timetable for next week clicked")}
          >
            <h2>Create Timetable For Next Week</h2>
          </div>
        </div>
      )}

      {page === "view" && (
        <div className="view-page">
          <div className="timetable-content">
            <p className="empty-msg">No time is made for this week.</p>
          </div>

          {/* Bottom actions */}
          <div className="bottom-actions">
            <button onClick={() => alert("Cancel a class clicked")}>
              ❌ Cancel a Class
            </button>
            <button onClick={() => alert("Reschedule a class clicked")}>
              🔄 Reschedule a Class
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timetable;
