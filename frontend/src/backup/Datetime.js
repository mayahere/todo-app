import React, { useState } from "react";
import moment from "moment";
import { Todo } from "./Todo";

const DateTime = ({ task }) => {
    const [times, setTimes] = useState([]);
    const dueDate = () => { setTimes(moment().format("MMM Do YY").toString()); };
    return (
        <div className="DueDate">
            <p className='getDate' defaultValue={dueDate} readOnly="false" />
        </div>
    );
};

export default DateTime;
