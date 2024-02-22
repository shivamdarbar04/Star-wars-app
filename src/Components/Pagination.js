import React from 'react';

const Pagination = ({ onNextPage, onPrevPage, currentPage, totalPages }) => {
  return (
    <div className="pagination">
      <button onClick={onPrevPage} style={{fontSize:'20px',marginTop:'20px'}} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={onNextPage} style={{fontSize:'20px'}} disabled={currentPage === totalPages}>
        Next
      </button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      
    </div>
  );
};

export default Pagination;
