import React, { useState } from 'react';
import './PopUp.css';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="popup">
        <div className="popup-content">
          <p>Click anywhere to close the popup</p>
          <button onClick={closePopup}>Close</button>
        </div>
      </div>
    )
  );
};

export default Popup;
