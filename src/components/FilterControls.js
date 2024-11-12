import React from 'react';

const FilterControls = ({ updateFilter, updateSort }) => {
  return (
    <div className="filter-controls">
      <select onChange={(e) => updateFilter({ category: e.target.value })}>
        <option value="All">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <select onChange={(e) => updateFilter({ priority: e.target.value })}>
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
      </select>
      <select onChange={(e) => updateSort(e.target.value)}>
        <option value="priority">Sort by Priority</option>
        <option value="deadline">Sort by Deadline</option>
      </select>
    </div>
  );
};

export default FilterControls;
