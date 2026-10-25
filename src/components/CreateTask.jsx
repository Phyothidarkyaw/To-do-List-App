import { useState } from "react";
import useTaskStore from "../store/useTaskStore";
import { toast } from "sonner";

const CreateTask = () => {
  const [job, setJob] = useState("");
  const { addTask } = useTaskStore();

  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    if (!job.trim()) return;

    const newTask = {
      id: Date.now(),
      task: job,
      isDone: false,
    };

    addTask(newTask);
    setJob("");

    toast.success("Create new task successfully");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTaskBtn();
    }
  };

  return (
    <div className="flex mb-5">
      <input
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={job}
        type="text"
        placeholder="Write a new task..."
        className="border-2 border-neutral-300 focus:border-neutral-400 focus:outline-none rounded-l-md p-2 grow"
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
