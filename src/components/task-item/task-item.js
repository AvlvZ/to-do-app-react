import React from 'react';
import {Component} from "react";
import "./task-item.css"

class TaskItem extends Component{

  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    }
  }

  onFavorite = () => {
    this.setState(({favorite}) => ({
      favorite: !favorite
    }))
  }

  render() {
    const {title, date} = this.props;
    const {favorite} = this.state

    let classNames = "task-item";
    if(favorite) {
      classNames += " increase"
    }

    return (
      <li className={classNames}>
        <div className="task-item__title">{title}</div>
        <div className="task-item__date">{date}</div>
        <div className="task-item-btns">
          <button className="task-item__btn">
            <i className="fas fa-trash"></i>
          </button>
          <button className="task-item__btn" onClick={this.onFavorite}>
            <i className="fas fa-star"></i>
          </button>
        </div>
      </li>
    );
  }
};

export default TaskItem;