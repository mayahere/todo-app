import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const getSavedData = async () => {
      const response = await axios.get("http://127.0.0.1:8000/todos");
      const savedTodos = response.data;
      const groupedDate = savedTodos.map((task) => task.date);
      const uniqueDate = groupedDate.filter(
        (date, index) => groupedDate.indexOf(date) === index
      );
      await setTimeline(uniqueDate);
      setTodos(savedTodos);
    };
    getSavedData();
  }, [timeline]);

  useEffect(() => {
    const saveTodosToLocalStorage = async () => {
      if (todos.length > 0) {
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    };
    saveTodosToLocalStorage();
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        content: todo.content,
        date: todo.newDate,
        expired: false,
        completed: false,
        editting: false
      }
    ]);
    axios.post("http://127.0.0.1:8000/todos", todo)
    .then(res => setTodos([...todos, res.data]))
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    // axios.post("http://127.0.0.1:8000/todos", id)
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    axios.delete("http://127.0.0.1:8000/todos/" + id)
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editting: !todo.editting } : todo
      )
    );
  };

  const isPassDueDate = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        // const expired = moment(todo.date).isBefore(moment());
        return { ...todo, expired: true };
      })
    );
  };

  const dueDate = (date) => {
    setDates([...dates, date]);
  };
  return (
    <div className="TodoWrapper">
      <h1>Your To-do Lists</h1>
      <TodoForm addTodo={addTodo} addDueDate={dueDate} />
      {timeline.map((value) => {
        return (
          <div key={value}>
            <h1>{value}</h1>
            {todos
              .filter((task) => task.date === value)
              .map((todo) => {
                return (
                  <Todo
                    task={todo}
                    key={todo.id}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    isPassDueDate={isPassDueDate}
                  />
                );
              })}
          </div>
        );
      })}
    </div>
  );
};