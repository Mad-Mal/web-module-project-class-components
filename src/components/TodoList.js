import React from 'react'
import Todo from '../components/Todo'

const ToDoList = props => {



    return (
        <div>
            {props.ToDoTasks.map(item => (
            <Todo id={item.id} task={item.task} completed={item.completed} toggleCompleted={props.toggleCompleted}/>
      ))}
        </div>
    )
}
export default ToDoList