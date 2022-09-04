import { Component } from 'react'
import { func, string } from 'prop-types';
import { generateOptions } from '../../helpers/itemGenerators';
import { PRIORITIES, STATUSES } from '../../constants/itemConstants';

export default class ItemCard extends Component {

  state = {
    titleEditMode: false,
    descriptionEditMode: false,
    priorityEditMode: false,
    statusEditMode: false,
    removeItem: true,
  };

  handleDeleteClick = () => {
    if (global.confirm("Are you sure?")) {
      this.setState({ removeItem: false })
    }
  }

  handleEditModeOn = (event) => {
    this.setState({
      [`${event.target.getAttribute('name')}EditMode`]: true,
    });
  }

  handleBlur = (event) => {
    this.setState({
      [`${event.target.getAttribute('name')}EditMode`]: false,
    });
  }

  handleChange = (event) => {
    this.props.onUpdate(this.props.id, { [event.target.name]: event.target.value });
  }

  render() {
    const {
      titleEditMode,
      descriptionEditMode,
      priorityEditMode,
      statusEditMode,
      removeItem,
    } = this.state;

    const {
      title,
      description,
      status,
      priority,
    } = this.props;

    return (
      removeItem && <div className="ItemCard">
        {!this.state.titleEditMode && <h2 onClick={this.handleEditModeOn} name="title">{title}</h2>}
        {titleEditMode && (
          <h2>
            <input
              type="text"
              value={title}
              name="title"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
            />
          </h2>
        )}
        <hr className='line'></hr>
        <h3>Description:</h3>
        {!descriptionEditMode && <p className='description' onClick={this.handleEditModeOn} name="description">{description}</p>}
        {descriptionEditMode && (
          <p className='description'>
            <textarea
              onBlur={this.handleBlur}
              value={description}
              name="description"
              onChange={this.handleChange}
            />
          </p>
        )}
        <h3>Priority:</h3>
        {!priorityEditMode && <p className='description' onClick={this.handleEditModeOn} name="priority">{priority}</p>}
        {priorityEditMode && (
          <p
            defaultValue={priority}
            onBlur={this.handleBlur}
            name="priority"
            onChange={this.handleChange}>
            {generateOptions('priority', priority, PRIORITIES, this.handleChange)}
          </p>
        )}
        <h3>Status:</h3>
        {!statusEditMode && <p className='description' onClick={this.handleEditModeOn} name="status">{status}</p>}
        {statusEditMode && (
          <p
            defaultValue={status}
            onBlur={this.handleBlur}
            name="status"
            onChange={this.handleChange}>
            {generateOptions('status', status, STATUSES, this.handleChange)}
          </p>
        )}
        <div className='button-block'>
          <button type="button" onClick={this.handleDeleteClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M6 7C6.55228 7 7 7.44772 7 8V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V8C5 7.44772 5.44772 7 6 7Z" fill="#ffffff" />
              <path fillRule="evenodd" clipRule="evenodd" d="M10 8C10.5523 8 11 8.44772 11 9V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V9C9 8.44772 9.44772 8 10 8Z" fill="#ffffff" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14 8C14.5523 8 15 8.44772 15 9V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V9C13 8.44772 13.4477 8 14 8Z" fill="#ffffff" />
              <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5Z" fill="#ffffff" />
              <path fillRule="evenodd" clipRule="evenodd" d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H9C8.44772 4 8 3.55228 8 3Z" fill="#ffffff" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  id: string,
  title: string,
  description: string,
  priority: string,
  status: string,
  onUpdate: func,
};

ItemCard.defaultProps = {
  title: 'Hello world',
  description: 'Lorem ipsum blablabla Lorem ipsum blablabla Lorem ipsum blablabla Lorem ipsum blablabla',
  status: 'TODO',
  priority: 'HIGH',
};

