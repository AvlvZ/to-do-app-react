import React from 'react';
import TaskItem from "../task-item/task-item";
import "./task.css"

const Task = ({data}) => {

  return (
    <div className="task">
      <ul className="app-list list-group">
        { data.map(item => {
          const {id, ...itemProps} = item;
          return <TaskItem key={id} {...itemProps} />
        }) }
      </ul>
    </div>
  );
};

export default Task;