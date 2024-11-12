
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, filter, sort, deleteTask }) => {
  const filteredTasks = tasks
    .filter(task => (
      (filter.category === "All" || task.category === filter.category) &&
      (filter.priority === "All" || task.priority === filter.priority)
    ))
    .sort((a, b) => sort === "priority" ? a.priority.localeCompare(b.priority) : new Date(a.deadline) - new Date(b.deadline));

  return (
    <div className="todo-list">
      {filteredTasks.map(task => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TodoList;
