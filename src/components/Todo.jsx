import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

function Todo({ task,toggleComplete,deleteTodo,editTodo }) {
  return (
    <div className="Todo">
      <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
      <div>
        <FaEdit className='todo-edit ' onClick={()=>editTodo(task.id)}/>
        <FaTrash className='todo-trash ' onClick={()=>{
          deleteTodo(task.id)
        }}/>
      </div>
    </div>
  );
}

export default Todo;
