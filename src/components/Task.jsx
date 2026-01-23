import { Trash2 } from "lucide-react";

const Task = ({ job, removeTask }) => {
  const handleDeleteBtn = () => {
    if (confirm("Are you want to delete?")) {
      removeTask(job);
    }
  };
  return (
    <div className="flex justify-between items-center border-2 border-neutral-300 rounded-md p-2 mb-2">
      <div className="flex gap-3">
        <input type="checkbox" />
        <p>{job}</p>
      </div>
      <button onClick={handleDeleteBtn}>
        <Trash2 className="size-5 text-red-500 duration-200 active:scale-90" />
      </button>
    </div>
  );
};

export default Task;
