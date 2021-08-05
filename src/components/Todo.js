import React from 'react'
import '../App'

const Todo = props => {
    return (
        <div style={{display: "flex", alignItems: "center"}} onClick={() => props.toggleCompleted(props.id)} >
            <p className={`${props.completed ? 'completed' : 'defaultItem'}`}>{props.task}</p>
        </div>
    )
}
export default Todo