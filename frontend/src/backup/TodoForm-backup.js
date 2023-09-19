<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
import React, { useState } from "react";
import moment from "moment";

export const TodoForm = ({ addTodo, addDueDate }) => {
    const [value, setValue] = useState({ content: "", dueDate: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDate = moment().format("MMMM Do YYYY, h:mm");
        addDueDate(newDate);
        const newJob = { ...value, newDate };
        addTodo(newJob);
        setValue({ content: "", dueDate: "" });
    };
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={value.content}
                onChange={(e) => setValue({ content: e.target.value })}
                className="todo-input"
                placeholder="What's up today?"
            />
            <button type="submit" className="todo-btn">
                Add Task
            </button>
        </form>
    );
};
<<<<<<< HEAD
=======
import React, { useState } from 'react'
import moment from "moment"

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }

    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <h2 className='todo-title'>Your To-Do Lists</h2>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Add your to-do here' />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}
>>>>>>> fe1f1f820b0b6f827be27ad971cf91ec9248307c
=======
>>>>>>> origin/master
