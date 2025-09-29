import React, { useState, useEffect } from "react";
import "./Assignment.css";

function Assignment() {
  const [pdfFile, setPdfFile] = useState(null);
  const [deadline, setDeadline] = useState("");
  const [assignments, setAssignments] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Load from localStorage when page loads
  useEffect(() => {
    const storedAssignments = localStorage.getItem("assignments");
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    }
  }, []);

  // Save to localStorage whenever assignments change
  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!deadline || (!pdfFile && editingId === null)) {
      alert("Please select a PDF and deadline");
      return;
    }

    if (editingId) {
      // update assignment
      setAssignments(
        assignments.map((a) =>
          a.id === editingId
            ? {
                ...a,
                fileName: pdfFile ? pdfFile.name : a.fileName,
                file: pdfFile ? URL.createObjectURL(pdfFile) : a.file,
                deadline,
              }
            : a
        )
      );
      setEditingId(null);
    } else {
      // new assignment
      const newAssignment = {
        id: Date.now(),
        fileName: pdfFile.name,
        deadline,
        file: URL.createObjectURL(pdfFile), // save URL reference
        timestamp: new Date().toLocaleString(),
      };
      setAssignments([ newAssignment,...assignments,]);
    }

    // reset form
    setPdfFile(null);
    setDeadline("");
    e.target.reset();
  };

  const handleEdit = (assignment) => {
    setEditingId(assignment.id);
    setDeadline(assignment.deadline);
    setPdfFile(null); // optional re-upload
  };

  const handleDelete = (id) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  const handleCancel = () => {
    setEditingId(null);
    setPdfFile(null);
    setDeadline("");
  };

  return (
    <div className="assignment-container">
      <h2 className="heading">
        📚 {editingId ? "Update Assignment" : "Publish Assignment (PDF)"}
      </h2>

      <form onSubmit={handleSubmit} className="assignment-form">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="file-input"
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="date-input"
        />

        <div className="update-cancel">
          <button type="submit" className="publish-button">
            {editingId ? "Update" : "Publish"}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancel} className="cancel-button">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="assignment-feed">
        <h3>📑 Published Assignments</h3>
        {assignments.length === 0 ? (
          <p className="no-assignments">No assignments published yet.</p>
        ) : (
          assignments.map((a) => (
            <div key={a.id} className="assignment-card">
              <p><b>File:</b> {a.fileName}</p>
              <p><b>Deadline:</b> {a.deadline}</p>
              <span className="timestamp">Posted on: {a.timestamp}</span>
              <br />
              <a
                href={a.file}
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
              >
                📄 View PDF
              </a>

              <div className="edit-delete">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(a)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(a.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Assignment;
