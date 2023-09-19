<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({
    task,
    toggleComplete,
    deleteTodo,
    editTodo,
    isPassDueDate
}) => {
    return (
        <div className="Todo" style={task.passDueDate ? {} : { color: "#330000" }}>
            <p
                className={`${task.completed ? task.completed : ""}`}
                onClick={() => toggleComplete(task.id)}
            >
                {task.task.content}
            </p>
            <div>
                <Link to={`/update/${task.id}`} style={{ color: 'white' }}>
                    <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                </Link>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};
<<<<<<< HEAD
=======
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {

    return (
        <div className="Todo">
            <p className={`${task.completed ? task.completed : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}
>>>>>>> fe1f1f820b0b6f827be27ad971cf91ec9248307c
=======
>>>>>>> origin/master
