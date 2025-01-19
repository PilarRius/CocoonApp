import React, { useState } from 'react';
import './Popup.css'; // Import the CSS file for styling

interface VotePopupProps {
  routineName: string;
  onSave: (rating: number) => void;
  onCancel: () => void;
}

const VotePopup: React.FC<VotePopupProps> = ({ routineName, onSave, onCancel }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Vote Effectiveness for {routineName}</h2>
        <label>
          Rating (0-10):
          <input
            type="number"
            min="0"
            max="10"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </label>
        <button onClick={() => onSave(rating)}>Save Vote</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default VotePopup;