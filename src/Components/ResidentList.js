import React from 'react';

const ResidentList = ({ residents }) => {
  return (
    <div>
      <h3>Residents:</h3>
      <ul style={{listStyle:'none',padding:'0px'}}>
        {residents.map(resident => (
          <li key={resident.name} style={{border:'1px solid #2c3e50',borderRadius:'4px',margin:'8px 0',padding:'8px'}}>
            <p>Name: {resident.name}</p>
            <p>Height: {resident.height}</p>
            <p>Mass: {resident.mass}</p>
            <p>Gender: {resident.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResidentList;
