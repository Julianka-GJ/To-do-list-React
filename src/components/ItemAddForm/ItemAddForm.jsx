import React, { Component } from 'react'
import { PRIORITIES, STATUSES } from '../../constants/itemConstants';
import { generateOptions } from '../../helpers/itemGenerators';

import "./ItemAddForm.scss";

export default class ItemAddForm extends Component {
  state = {
    title: '',
    description: '',
    prioririty: PRIORITIES.LOW,
    status: STATUSES.TODO,
  };

  handleTitleChange = event => this.setState({ title: event.target.value });
  handleDescriptionChange = event => this.setState({ description: event.target.value });
  handlePriorityChange = event => this.setState({ priority: event.target.value });
  handleStatusChange = event => this.setState({ status: event.target.value });

  saveItem = () => {
    const {title, description, status, priority} = this.state;

    this.props.onAdd({ title, description, status, priority });
  }

  render() {
    const {
      title,
      description,
      status,
      priority,
    } = this.state;

    return (
      <div className='new-item'>
        <h2>Add new task</h2>
        <form>
          <h3>
            Title:
            <input 
              type="text"
              name="title"
              value={title}
              onChange={this.handleTitleChange}
            />
          </h3>
          <hr className='line'></hr>
          <h3>
            Description
            <textarea
              name="description"
              value={description}
              onChange={this.handleDescriptionChange}
            />
          </h3>
          <hr className='line'></hr>
          <h3>Priority</h3>
          <div>
            {generateOptions('priority', priority, PRIORITIES, this.handlePriorityChange)}
          </div>
          <h3>Status</h3>
          <div>
            {generateOptions('status', status, STATUSES, this.handleStatusChange)}
          </div>
          <div className='button-save'>
            <button type="button" onClick={this.saveItem}>Save</button>
          </div>
        </form>
      </div>
    )
  }
}
