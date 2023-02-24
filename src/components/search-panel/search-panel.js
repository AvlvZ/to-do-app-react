import React from 'react';
import "./search-panel.css"

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Find a task"
      />
    </div>
  );
};

export default SearchPanel;