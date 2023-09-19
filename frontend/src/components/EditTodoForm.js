import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const EditTodoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = response.map((todo) =>
      todo.id === id ? { ...todo, task: { ...todo.task, content } } : todo
    );
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    navigate(-1);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setContent(value);
  };

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('todos')) || [];
    const todo = response.find((todo) => todo.id === id);
    if (todo) {
      setContent(todo.task.content);
    }
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-950 pb-12 bottom-1.5">
          <h1 className="h1">Update Tasks</h1>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-gray-950">
          <div className="sm:col-span-4">
            <div className="mt-2">
              <div className="mt-4 mb-4 text-white">
                <input
                  type="text"
                  value={content}
                  onChange={handleChange}
                  className="todo-input"
                  placeholder="Update task"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-btn">
        <button type="submit" className="todo-btn">
          Save
        </button>
      </div>
    </form>
  );
};
