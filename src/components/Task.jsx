import { Trash2 } from "lucide-react";

const Task = ({ job }) => {
  return (
    <div className="flex justify-between items-center border-2 border-neutral-300 rounded-lg p-2 mb-2">
      <div className="flex gap-3">
        <input type="checkbox" />
        <p>{job}</p>
      </div>

      <Trash2 className="size-4 text-red-500" />
    </div>
  );
};

export default Task;
