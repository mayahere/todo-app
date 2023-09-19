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
