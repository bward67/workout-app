import React from "react";

const ConfirmDeleteModal = ({ onCancel, onConfirm, message }) => {
  //   if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="trash-message">{message || "Are you sure?"}</p>
        <div className="modal-buttons">
          <button className="confirm-btn" onClick={onConfirm}>
            Yes
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
