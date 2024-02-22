import React, { useState, useEffect } from 'react';
import PlanetCard from './Components/PlanetCard';
import Pagination from './Components/Pagination';


const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch(`https://swapi.dev/api/planets/?format=json&page=${currentPage}`);
      const data = await response.json();
      setPlanets(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    };

    fetchPlanets();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container">
      <h1>Star Wars Planets</h1>
      {planets.map((planet) => (
        <PlanetCard key={planet.name} planet={planet} />
      ))}
      <Pagination
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default App;
