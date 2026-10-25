import { useEffect, useRef, useState } from "react";
import { Edit, Trash2, Check, X } from "lucide-react";
import useTaskStore from "../store/useTaskStore";
import { toast } from "sonner";

const Task = ({ job: { id, task, isDone } }) => {
  const { removeTask, doneTask, editTask } = useTaskStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleDeleteBtn = async () => {
    removeTask(id);
    toast.success("Delete task successfully");
  };

  const handleOnChange = () => {
    doneTask(id);
  };

  const handleEditBtn = () => {
    setEditedTask(task);
    setIsEditing(true);
  };

  const handleSaveBtn = () => {
    if (!editedTask.trim()) return;

    editTask(id, editedTask.trim());
    setIsEditing(false);
    toast.success("Update task successfully");
  };

  const handleCancelBtn = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSaveBtn();
      toast.success("Update task successfully");
    }

    if (event.key === "Escape") {
      handleCancelBtn();
    }
  };

  return (
    <div className="flex justify-between items-center border-2 border-neutral-300 rounded-md p-2 mb-2">
      <div className="flex items-center gap-3 grow min-w-0">
        <input
          type="checkbox"
          className="size-4 shrink-0"
          checked={isDone}
          onChange={handleOnChange}
          disabled={isEditing}
        />

        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editedTask}
            onChange={(event) => setEditedTask(event.target.value)}
            onKeyDown={handleKeyDown}
            className="focus:outline-none grow min-w-0"
          />
        ) : (
          <p
            className={`wrap-break-word ${isDone ? "line-through text-gray-500" : ""}`}
          >
            {task}
          </p>
        )}
      </div>

      <div className="flex gap-2 items-center ml-2">
        {isEditing ? (
          <>
            <button onClick={handleSaveBtn} aria-label="Save task">
              <Check className="size-4 text-green-600" />
            </button>
            <button onClick={handleCancelBtn} aria-label="Cancel editing">
              <X className="size-4 text-gray-500" />
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEditBtn} aria-label="Edit task">
              <Edit className="size-4 duration-200 active:scale-90" />
            </button>
            <button onClick={handleDeleteBtn} aria-label="Delete task">
              <Trash2 className="size-4 text-red-500 duration-200 active:scale-90" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
