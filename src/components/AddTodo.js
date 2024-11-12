
import React, { useState } from 'react';

const AddTodo = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;  // Check if title is empty

    const newTask = {
      id: Date.now(), // Generate a unique ID
      title,
      priority,
      category,
      deadline,
    };

    addTask(newTask); // Call addTask from App to update the task list
    setTitle('');
    setPriority('Medium');
    setCategory('General');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;