import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [job, setJob] = useState("");
  const handleOnChange = (event) => {
    setJob(event.target.value);
  };
  const handleAddTaskBtn = () => {
    addTask(job);
    setJob("")
  };
  return (
    <div className="flex mb-5">
      <input
        onChange={handleOnChange}
        value={job}
        type="text"
        placeholder="Write a new task..."
        className="border-2  border-neutral-300 focus:border-neutral-400 focus:outline-none rounded-l-md p-2 grow"
      />
      <button
        onClick={handleAddTaskBtn}
        className="border-2 border-neutral-300 bg-neutral-300 rounded-r-md px-4 py-2 font-semibold duration-200 active:scale-95"
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
