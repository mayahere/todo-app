import React, { useState } from "react";
import "./styles.css";
import moment from "moment";

export default function App() {
    const [job, setJob] = useState({ content: "", dueDate: "" });
    const [jobs, setJobs] = useState([]);

    const handleSubmit = (id) => {
        setJob((prev) => {
            return {
                ...prev,
                content: id.target.value,
                dueDate: moment().format("MMM Dd YY").toString()
            };
        });
        setJobs((prev) => [...prev, job]);
        setJob({ content: "", dueDate: "" });
    };

    return (
        <div style={{ padding: 32 }}>
            <h1>Hello Sanbox</h1>
            <input
                type="text"
                value={job.content}
                onChange={(e) => setJob({ content: e.target.value })}
            />
            <button onClick={handleSubmit}>Add</button>
            <div>
                <p defaultValue={job.dueDate} />
            </div>

            <ul>
                {console.log(jobs)}
                {jobs.map((task, index) => (
                    <li key={index}>{task.content}</li>
                ))}
            </ul>
            <ul>
                {console.log(jobs)}
                {jobs.map((task, index) => (
                    <li key={index}>{task.dueDate}</li>
                ))}
            </ul>
        </div>
    );
}
