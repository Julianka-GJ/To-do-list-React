import React, { Component } from 'react'
import { PRIORITIES, STATUSES } from '../../constants/itemConstants';
import { generateOptions } from '../../helpers/itemGenerators';
import Modal from '../Modal/Modal';

import "./ItemAddForm.scss";

export default class ItemAddForm extends Component {
  state = {
    title: '',
    description: '',
    priority: PRIORITIES.LOW,
    status: STATUSES.TODO,
  };

  state = {
    visible: false,
  };


  handleTitleChange = event => this.setState({ title: event.target.value });
  handleDescriptionChange = event => this.setState({ description: event.target.value });
  handlePriorityChange = event => this.setState({ priority: event.target.value });
  handleStatusChange = event => this.setState({ status: event.target.value });

  handleBlur = (event) => {
    this.setState({
      [`${event.target.getAttribute('name')}EditMode`]: false,
    });
  }

  saveItem = () => {
    const { title, description, status, priority } = this.state;

    if (title && description) {
      this.props.onAdd({ title, description, status, priority });
      this.state.title = "";
      this.state.description = "";
      this.state.status = STATUSES.TODO;
      this.state.priority = PRIORITIES.LOW;
    }

    else {
      this.setState({ visible: true });
    }
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  render() {
    const {
      title,
      description,
      status,
      priority,
    } = this.state;

    const {
      visible
    } = this.state;

    return (
      <div className='new-item'>
        <h2>Add new task</h2>
        <form>
          <h3>
            Title:
            <input
              onBlur={this.handleBlur}
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
              onBlur={this.handleBlur}
              name="description"
              value={description}
              onChange={this.handleDescriptionChange}
            />
          </h3>
          <hr className='line'></hr>
          <h3>Priority</h3>
          <div
            defaultValue={priority}
            onBlur={this.handleBlur}>
            {generateOptions('priority', priority, PRIORITIES, this.handlePriorityChange)}
          </div>
          <h3>Status</h3>
          <div
            defaultValue={status}
            onBlur={this.handleBlur}>
            {generateOptions('status', status, STATUSES, this.handleStatusChange)}
          </div>
          <div className='button-save'>
            <button type="button" onClick={this.saveItem}>Save</button>
          </div>
        </form>
        {visible && <Modal popUpText={"All fields are required"} state={visible} closeModal={this.closeModal}/>}
      </div>
    )
  }
}
