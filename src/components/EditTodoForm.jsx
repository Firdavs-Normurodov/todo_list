
import React, { useState } from 'react';

function EditTodoForm({ editTodo,task }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      // Agar input bo'sh bo'lsa, qo'shmaymiz
      return;
    }
    editTodo(value,task.id);
    setValue('');
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Update Task</button>
    </form>
  );
}

export default EditTodoForm;
