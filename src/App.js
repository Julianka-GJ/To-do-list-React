import { object } from 'prop-types';
import { Component } from 'react';
import ItemAddForm from './components/ItemAddForm/ItemAddForm';
import ItemCard from './components/ItemCard/ItemCard';
// this can be used instead of state items (then we have to use forceUpdate)
// import items from './db/db.json';


export default class App extends Component {
  state = {
    items: {
      1: {
        "id": "1",
        "title": "Complete new homework",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "status": "TODO",
        "priority": "HIGH"
      },
      2: {
        "id": "2",
        "title": "Meeting with team",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "status": "TODO",
        "priority": "HIGH"
      },
      3: {
        "id": "3",
        "title": "Сomplete the workout",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "status": "TODO",
        "priority": "LOW"
      }
    },
  };

  handleItemsUpdate = (id, { title, description, status, priority }) => {
    const searchItem = {
      ...this.state.items[id],
    };
    if (title) {
      searchItem.title = title;
    }

    if (description) {
      searchItem.description = description;
    }

    if (status) {
      searchItem.status = status;
    }

    if(priority) {
      searchItem.priority = priority;
    }

    this.setState({
      items: {
        ...this.state.items,
        [id]: searchItem,
      }
    });
  };

  handleAddItem = item => {
    const id = Date.now();
    const newItem = {
      id,
      ...item,
    };
    this.setState({ items: {
      ...this.state.items,
      [id]: newItem,
    } })
  };

  render() {
    return (
      <div className='container'>
        <div className='add-form'>
          <ItemAddForm
              onAdd={this.handleAddItem}
            />
        </div>
        <div className="cards-block">
          {Object.values(this.state.items).map(item => (
            <ItemCard 
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              status={item.status}
              priority={item.priority}
              onUpdate={this.handleItemsUpdate}
            />
          ))}
        </div>
      </div>
    )
  }
}