import useTaskStore from "../store/useTaskStore";
import Task from "./Task";

const TaskList = () => {
  const {tasks} = useTaskStore();
  return (
    <div>
      <h3 className="font-bold text-xl font-serif mb-3">
        Task Lists ( {tasks.filter((el) => el.isDone ).length}/{tasks.length} )
      </h3>
      {tasks.map((el) => (
        <Task key={el.id} job={el} />
      ))}
    </div>
  );
};

export default TaskList;
