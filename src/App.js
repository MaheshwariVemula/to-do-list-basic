
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterControls from './components/FilterControls';
import './css/styles.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Sample Task 1", priority: "High", category: "Work", deadline: "2024-12-01" },
    { id: 2, title: "Sample Task 2", priority: "Low", category: "Personal", deadline: "2024-11-25" }
  ]);

  const [filter, setFilter] = useState({ category: "All", priority: "All" });
  const [sort, setSort] = useState("priority");

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateFilter = (newFilter) => {
    setFilter((prev) => ({ ...prev, ...newFilter }));
  };

  const updateSort = (newSort) => {
    setSort(newSort);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTodo addTask={addTask} />
      <FilterControls updateFilter={updateFilter} updateSort={updateSort} />
      <TodoList tasks={tasks} filter={filter} sort={sort} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
