import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
uuidv4();



export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [timeline, setTimeline] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const getSavedData = async () => {
            if (localStorage.getItem("todos")) {
              const savedTodos = JSON.parse(localStorage.getItem("todos"));
        
              const dueDate = savedTodos.map(task => task.task.newDate);
              const uniqueDate = dueDate.filter(
                (date, index) => dueDate.indexOf(date) === index
              );
              await setTimeline(uniqueDate);
              setTodos(savedTodos);
            }};
        getSavedData();
    }, [])

    useEffect(() =>  {
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
                task: todo,
                passDueDate: false,
                completed: false,
                isEditting: false
            }
        ]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditting: !todo.isEditting } : todo
            )
        );
    };

    const isPassDueDate = () => {
        setTodos((todos) =>
          todos.map((todo) => {
            const passDueDate = moment(todo.task.newDate).isBefore(moment());
            return { ...todo, passDueDate: passDueDate };
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
                        .filter((task) => task.task.newDate === value)
                        .map((todo, index) => {return (
                            <Todo
                            task={todo}
                            key={todo.id}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                            isPassDueDate={isPassDueDate}
                        />
                        )}
                        )}
                    </div>
                );
            })}
        </div>
    );
};
