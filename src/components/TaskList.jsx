import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h3 className="font-bold text-xl font-serif mb-3">
        Task Lists ( 0/{tasks.length} )
      </h3>
      {tasks.map((el) => (
        <Task key={el} job={el} />
      ))}
    </div>
  );
};

export default TaskList;
