import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const ToDoTasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      ToDoTasks: ToDoTasks
    }
  }

  submitHandler = e => {
    e.preventDefault();

    this.addItem(this.state.newItem)

  }

  changeHandler = e => {
    this.setState({
      ...this.state,
      newItem: e.target.value
    });
  }

  addItem = (itemName) => {
    console.log("This item has been added, ", itemName)
    this.setState({
      ...this.state,
      ToDoTasks: [
        ...this.state.ToDoTasks,
        {
          task: itemName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      ToDoTasks: this.state.ToDoTasks.filter(item => !item.completed)
    })
  }

  toggleCompleted = (itemId) => {
    const updatedToDoList = this.state.ToDoTasks.map(item => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      else {
        return item;
      }
    });
    this.setState({
      ...this.state,
      ToDoTasks: updatedToDoList
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm newItem={this.state.newItem} submitHandler={this.submitHandler} changeHandler={this.changeHandler} addItem={this.addItem} clearCompleted={this.clearCompleted}/>
        <TodoList ToDoTasks={this.state.ToDoTasks} toggleCompleted={this.toggleCompleted} />
      </div>
    );
}
};
export default App
