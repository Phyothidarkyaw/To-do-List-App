import { Trash2 } from "lucide-react";

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  const handleDeleteBtn = () => {
    if (confirm("Are you want to delete?")) {
      removeTask(id);
    }
  };
  const handleOnChange = () => {
    doneTask(id);
  };
  return (
    <div className="flex justify-between items-center border-2 border-neutral-300 rounded-md p-2 mb-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="size-4"
          checked={isDone}
          onChange={handleOnChange}
        />
        <p className={`${isDone && "line-through text-gray-500"}`}>{task}</p>
      </div>
      <button onClick={handleDeleteBtn}>
        <Trash2 className="size-5 text-red-500 duration-200 active:scale-90" />
      </button>
    </div>
  );
};

export default Task;
