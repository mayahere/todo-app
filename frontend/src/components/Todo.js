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
  const isCompleted = task.completed;
  const isPastDueDate = task.expired;

  return (
    <div className="Todo">
      <p
        className={`${isCompleted ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
        style={!isPastDueDate ? {} : { color: "#330000" }}
      >
        {task.content}
      </p>
      <div>
        <Link to={`/update/${task.id}`} style={{ color: "white" }}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editTodo(task.id)}
          />
        </Link>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
