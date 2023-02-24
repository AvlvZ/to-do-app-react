import React from 'react';
import "./app-filter.css"

const AppFilter = () => {
  return (
    <div className="app-filter">
      <button className="btn btn-light" type="button">Все задачи</button>
      <button className="btn btn-light-outline-light" type="button">Избранные задачи</button>
      <button className="btn btn-light-outline-light" type="button">По дате</button>
    </div>
  );
};

export default AppFilter;