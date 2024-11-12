
import React from 'react';

const TodoItem = ({ task, deleteTask }) => {
  return (
    <div className="todo-item">
      <h3>{task.title}</h3>
      <p><span>Priority:</span> {task.priority}</p>
      <p><span>Category:</span> {task.category}</p>
      <p><span>Deadline:</span> {task.deadline}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
