import React, { useState } from 'react';

function Card({ name, age, image, hobbies, onDelete }) {
  const [showDetails, setShowDetails] = useState(false); // ستايت لتغيير حالة التفاصيل

  return (
    <div style={{
      border: '1px solid gray',
      padding: '16px',
      margin: '16px',
      borderRadius: '8px',
      width: '250px',
      boxSizing: 'border-box',
      textAlign: 'center'
    }}>
      <img src={image} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
      <h2>{name}</h2>
      <p>العمر: {age}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
      </button>
      <button onClick={onDelete}>
  🗑️ حذف
</button>

      {showDetails && (
        <p style={{ marginTop: '10px' }}><strong>الهوايات:</strong> {hobbies}</p>
      )}
    </div>
  );
}

export default Card;


