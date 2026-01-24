import React from "react";
import Task from "./Task";

const TaskList = ({ tasks,removeTask,doneTask }) => {
  return (
    <div>
      <h3 className="font-bold text-xl font-serif mb-3">
        Task Lists ( {tasks.filter((el) => el.isDone ).length}/{tasks.length} )
      </h3>
      {tasks.map((el) => (
        <Task key={el.id} job={el} removeTask={removeTask} doneTask={doneTask} />
      ))}
    </div>
  );
};

export default TaskList;
