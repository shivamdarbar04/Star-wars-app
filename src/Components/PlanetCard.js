import React, { useState, useEffect } from 'react';
import ResidentList from './ResidentList';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const residentRequests = planet.residents.map(residentUrl => fetch(residentUrl).then(res => res.json()));
      const residentData = await Promise.all(residentRequests);
      setResidents(residentData);
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <div style={{border: '1px solid #2c3e50',borderRadius:'8px',marginTop:'20px',marginLeft:'20px',padding:'15px'}}>
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <ResidentList residents={residents} />
    </div>
  );
};

export default PlanetCard;
