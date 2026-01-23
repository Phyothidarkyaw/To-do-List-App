import React from "react";

const CreateTask = () => {
  return (
    <div className="flex mb-5">
      <input
        type="text"
        className="border-2  border-neutral-300 focus:ring-2 focus:ring-neutral-200
         focus:outline-none rounded-l-lg p-2 grow"
      />
      <button className="border-2 border-neutral-300 bg-neutral-300 rounded-r-lg px-4 py-2 font-semibold duration-200 active:scale-95">
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
