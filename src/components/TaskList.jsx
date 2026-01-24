import useTaskStore from "../store/useTaskStore";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useTaskStore();
  return (
    <div>
      <h3 className="font-bold text-xl font-serif mb-3">
        Task Lists ( {tasks.filter((el) => el.isDone).length}/{tasks.length} )
      </h3>
      {tasks.length === 0 ? (
        <div className="flex flex-col gap-5 justify-center items-center">
          <img src="/src/assets/add-note.png" alt="" className="size-70" />
          <p className="text-xl font-serif text-gray-500">
            There has no task list.
          </p>
        </div>
      ) : (
        <div>
          {tasks.map((el) => (
            <Task key={el.id} job={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
