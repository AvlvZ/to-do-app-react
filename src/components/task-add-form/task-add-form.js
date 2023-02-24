import React from 'react';
import {Component} from "react";
import "./task-add-form.css"

class TaskAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: ""
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {title, date} = this.state;

    return (
      <div className="task-add-form">
        <h3 className="task-add-form__header">Добавить новую задачу</h3>
        <form action="" className="task-add-form-item">
          <div className="task-add-form-items">
            <input
              type="text"
              className="form-control task-form__input"
              onChange={this.onValueChange}
              name="title"
              value={title}
            />
            <input
              type="date"
              className="form-control task-form__input"
              onChange={this.onValueChange}
              name="date"
              value={date}
            />
          </div>
          <input type="submit" className="btn btn-outline-light task-add-form-submit"/>
        </form>
      </div>
    );
  }
};

export default TaskAddForm;