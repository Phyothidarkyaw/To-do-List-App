import React from "react";
import Task from "./Task";

const TaskList = ({ tasks,removeTask }) => {
  return (
    <div>
      <h3 className="font-bold text-xl font-serif mb-3">
        Task Lists ( 0/{tasks.length} )
      </h3>
      {tasks.map((el) => (
        <Task key={el} job={el} removeTask={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;
