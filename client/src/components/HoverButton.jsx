import { useState } from 'react';

export default function HoverButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hover-button-container">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? 'white' : 'black',
          color: isHovered ? 'black' : 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Hover Me
      </button>
    </div>
  );
}